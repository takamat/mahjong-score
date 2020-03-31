import { Yaku } from '../yaku'
import { Tile } from './../../constants/tile'

export class YakuhaiHaku extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(白)'
  englishName = 'yakuhai (haku)'

  isConditionMet(): boolean {
    return (
      this.hand.koutsuKantsuList.findIndex(
        mentsu => mentsu.tile === Tile.Haku,
      ) >= 0
    )
  }
}
