import { Yaku } from '../yaku'

export class Chanta extends Yaku {
  hanOpen = 1
  hanClose = 2
  isYakuman = false
  name = '混全帯么九'
  englishName = 'hon chantai yaochu'

  isConditionMet(): boolean {
    return false
  }
}
