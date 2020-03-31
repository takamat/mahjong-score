import { Yaku } from '../yaku'
import { Tile } from './../../constants/tile'

export class YakuhaiSouth extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(南)'
  englishName = 'yakuhai (south)'

  isConditionMet(): boolean {
    return (
      this.hand.koutsuKantsuList.findIndex(
        mentsu => mentsu.tile === Tile.Nan,
      ) >= 0
    )
  }
}
