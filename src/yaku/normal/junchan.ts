import { Yaku } from '../yaku'

export class Junchan extends Yaku {
  hanOpen = 1
  hanClose = 2
  isYakuman = false
  name = '純全帯么九'
  englishName = 'jun chantai yaochu'

  isConditionMet(): boolean {
    return false
  }
}
