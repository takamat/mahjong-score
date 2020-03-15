import { Yaku } from '../yaku'
import { Tile } from './../../constants/tile'

export class YakuhaiHatsu extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(發)'
  englishName = 'yakuhai (hatsu)'

  isConditionMet(): boolean {
    return Object.prototype.hasOwnProperty.call(
      this.hand.koutsuKantsuGroups,
      Tile.Hatsu,
    )
  }
}
