import { Yaku } from '../yaku'
import { Tile } from './../../constants/tile'

export class YakuhaiNorth extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(北)'
  englishName = 'yakuhai (north)'

  isConditionMet(): boolean {
    return Object.prototype.hasOwnProperty.call(
      this.hand.koutsuKantsuGroups,
      Tile.Pei,
    )
  }
}
