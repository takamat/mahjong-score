import { Yaku } from '../yaku'
import { Tile } from './../../constants/tile'

export class YakuhaiSouth extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(南)'
  englishName = 'yakuhai (south)'

  isConditionMet(): boolean {
    return Object.prototype.hasOwnProperty.call(
      this.hand.koutsuKantsuGroups,
      Tile.Nan,
    )
  }
}
