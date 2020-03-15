import { Yaku } from '../yaku'

export class Chankan extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '槍槓'
  englishName = 'chankan'

  isConditionMet(): boolean {
    return this.handConfig.isChankan
  }
}
