import { Yaku } from '../yaku'
import { Tile } from './../../constants/tile'

export class YakuhaiChun extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(中)'
  englishName = 'yakuhai (chun)'

  isConditionMet(): boolean {
    return (
      this.hand.koutsuKantsuList.findIndex(
        mentsu => mentsu.tile === Tile.Chun,
      ) >= 0
    )
  }
}
