import {IComponent} from '@/utils'
import {Node} from '@/node'
import {CanvasLayer} from '@/canvas-layer'
import {Settings} from '@/settings'

export class NodeDrawComponent implements IComponent {
  public Entity: Node

  public Awake(): void {
    this.Clear()
  }

  public Update(deltaTime: number): void {
    this.Clear()
    this.Draw()
  }

  private Draw(): void {
    CanvasLayer.Background.FillRect(
      this.Entity.Start,
      this.Entity.Size,
      Settings.grid.color[this.Entity.IsActive ? 'active' : 'regular']
    )
  }

  private Clear(): void {
    CanvasLayer.Background.ClearRect(this.Entity.Start, this.Entity.Size)
  }
}
