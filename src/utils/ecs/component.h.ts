import {Entity, IAwake, IUpdate} from '@/utils'

export interface IComponent extends IUpdate, IAwake {
  Entity: Entity | null
}
