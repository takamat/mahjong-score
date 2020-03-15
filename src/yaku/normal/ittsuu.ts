import { Yaku } from '../yaku'

export class Ittsuu extends Yaku {
  hanOpen = 1
  hanClose = 2
  isYakuman = false
  name = '一気通貫'
  englishName = 'ikkitsuukan'

  isConditionMet(): boolean {
    return false
  }
}
