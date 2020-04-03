import { Yaku } from '../yaku'

export class Toitoi extends Yaku {
  hanOpen = 2
  hanClose = 2
  isYakuman = false
  name = '対々和'
  englishName = 'toitoihou'

  isConditionMet(): boolean {
    if (this.hand.koutsuKantsuList.length >= 4) {
      return true
    }

    return false
  }
}
