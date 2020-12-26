import {Entity} from '@/utils'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Team} from '@/team'
import {Ship} from '@/ship'
import {Settings} from '@/settings'
import {Grid} from '@/grid'

export class Fleet extends Entity {
  private _ships: Ship[] = []

  constructor(public readonly Team: Team, private readonly _grid: Grid) {
    super()
  }

  public Awake(): void {
    super.Awake()

    this.PrepareShips()
  }

  public Update(deltaTime: number): void {
    super.Update(deltaTime)

    this._ships.forEach((ship) => ship.Update(deltaTime))
  }

  private PrepareShips(): void {
    const nodes = this._grid.Nodes
    const dimension = Settings.grid.dimension
    const fleetSize = Settings.ships.fleetSize

    for (let i = 0; i < fleetSize; i++) {
      const node = this.Team === Team.A ? nodes[i * dimension] : nodes[nodes.length - 1 - i * dimension]
      const ship = new Ship(this, node)
      this._ships.push(ship)
      ship.Awake()
    }
  }
}
