import { Yaku } from '../yaku'

export class Tanyao extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '断么九'
  englishName = 'tanyaochuu'

  isConditionMet(): boolean {
    return false
  }
}
