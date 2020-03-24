import { Yaku } from '../yaku'
import { Tile } from './../../constants/tile'

export class YakuhaiEast extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(東)'
  englishName = 'yakuhai (east)'

  isConditionMet(): boolean {
    return (
      this.hand.koutsuKantsuList.findIndex(
        mentsu => mentsu.tile === Tile.Ton,
      ) >= 0
    )
  }
}
