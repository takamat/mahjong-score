import { Yaku } from '../yaku'
import { Tile } from './../../constants/tile'

export class YakuhaiWest extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(西)'
  englishName = 'yakuhai (west)'

  isConditionMet(): boolean {
    return (
      this.hand.koutsuKantsuList.findIndex(
        mentsu => mentsu.tile === Tile.Sha,
      ) >= 0
    )
  }
}
