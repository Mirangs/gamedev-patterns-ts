import {Entity, Vector2D} from '@/utils'
import {NodeDrawComponent} from './components'
import {CanvasLayer} from '@/canvas-layer'

export class Node extends Entity {
  constructor(
    public readonly Start: Vector2D,
    public readonly End: Vector2D,
    public readonly Index: Vector2D
  ) {
    super()
  }

  public IsActive = false
  public get Size(): Vector2D {
    return new Vector2D(
      this.End.x - this.Start.x,
      this.End.y - this.Start.y
    )
  }

  public get Center(): Vector2D {
    return new Vector2D(
      this.Start.x + this.Size.x / 2,
      this.Start.y + this.Size.y / 2
    )
  }

  public Awake(): void {
    this.AddComponent(new NodeDrawComponent())

    super.Awake()

    document.body.addEventListener('click', (event) => {
      const point = CanvasLayer.Background.CalcLocalPointFrom(new Vector2D(event.clientX, event.clientY))
      if (point && this.Occupies(point)) {
        this.IsActive = !this.IsActive
      }
    })
  }

  public Occupies(point: Vector2D): boolean {
    return point.x > this.Start.x && point.x < this.End.x && point.y > this.Start.y && point.y < this.End.y
  }
}
