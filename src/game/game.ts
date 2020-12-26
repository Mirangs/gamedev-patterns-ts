import {Entity} from '@/utils'
import {Grid} from '@/grid'
import { Team } from '@/team'
import { Fleet } from '@/fleet'

export class Game extends Entity {
  private _lastTimeStamp = 0
  public _entities: Entity[] = []
  public get Entities(): Entity[] {
    return this._entities
  }

  public Awake(): void {
    super.Awake()
    const grid = new Grid()
    this._entities.push(
      grid,
      new Fleet(Team.A, grid),
      new Fleet(Team.B, grid)
    )

    for (const entity of this.Entities) {
      entity.Awake()
    }

    window.requestAnimationFrame(() => {
      this._lastTimeStamp = Date.now()
      this.Update()
    })
  }

  public Update(): void {
    const deltaTime = (Date.now() - this._lastTimeStamp) / 1000
    super.Update(deltaTime)

    for (const entity of this.Entities) {
      entity.Update(deltaTime)
    }

    this._lastTimeStamp = Date.now()
    window.requestAnimationFrame(() => this.Update())
  }
}
