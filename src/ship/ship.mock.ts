import {mockFleetFactory} from '@/fleet'
import { Ship } from '@/ship'
import {mockNodeFactory} from '@/node'

export const mockShipFactory = (
  fleet = mockFleetFactory(),
  node = mockNodeFactory()
): Ship => new Ship(fleet, node)
