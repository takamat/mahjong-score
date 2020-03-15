import { Yaku } from './../yaku'

export class Chiihou extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '地和'
  englishName = 'chiihou'

  isConditionMet(): boolean {
    return false
  }
}
