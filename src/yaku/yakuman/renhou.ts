import { Yaku } from '../yaku'

export class Renhou extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '人和'
  englishName = 'renhou'

  isConditionMet(): boolean {
    return false
  }
}
