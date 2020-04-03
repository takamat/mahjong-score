import { Yaku } from '../yaku'

export class SanAnkou extends Yaku {
  hanOpen = 2
  hanClose = 2
  isYakuman = false
  name = '三暗刻'
  englishName = 'san ankou'

  isConditionMet(): boolean {
    if (this.hand.koutsuKantsuList.length < 3) {
      return false
    }

    const closedMentsuList = this.hand.koutsuKantsuList.filter(
      mentsu => !mentsu.isOpen,
    )

    if (closedMentsuList.length >= 3) {
      return true
    }

    return false
  }
}
