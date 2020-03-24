import { Yaku } from '../yaku'

export class Chiitoitsu extends Yaku {
  hanOpen = null
  hanClose = 2
  isYakuman = false
  name = '七対子'
  englishName = 'chiitoitsu'

  isConditionMet(): boolean {
    return Object.keys(this.hand.toitsuList).length === 7
  }
}
