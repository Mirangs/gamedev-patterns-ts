import { Team } from '@/team'
import {Color} from '@/utils/color/color'

export const Settings = Object.freeze({
  grid: {
    dimension: 6,
    nodeSize: 100,
    nodeOffset: 10,
    color: new Color(245, 245, 245, 1)
  },
  ships: {
    fleetSize: 3,
    radius: 40,
    colors: {
      [Team.A]: new Color(187, 222, 251, 1),
      [Team.B]: new Color(255, 236, 179, 1)
    }
  }
})
