import { Yaku } from '../yaku'

export class Pinfu extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = '平和'
  englishName = 'pinfu'

  isConditionMet(): boolean {
    return false
  }
}
