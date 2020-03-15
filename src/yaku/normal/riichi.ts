import { Yaku } from '../yaku'

export class Riichi extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = '立直'
  englishName = 'riichi'

  isConditionMet(): boolean {
    return this.handConfig.isRiichi
  }
}
