import { Yaku } from '../yaku'
import { Tile } from './../../constants/tile'

export class YakuhaiEast extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(東)'
  englishName = 'yakuhai (east)'

  isConditionMet(): boolean {
    return Object.prototype.hasOwnProperty.call(
      this.hand.koutsuKantsuGroups,
      Tile.Ton,
    )
  }
}
