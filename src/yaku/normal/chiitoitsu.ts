import { Yaku } from '../yaku'

export class Chiitoitsu extends Yaku {
  hanOpen = null
  hanClose = 2
  isYakuman = false
  name = '七対子'
  englishName = 'chiitoitsu'

  isConditionMet(): boolean {
    // jantou 1 + toitsu 6 = 7
    return Object.keys(this.hand.toitsuList).length === 6
  }
}
