import { Yaku } from './../yaku'

export class SuuKantsu extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '四槓子'
  englishName = 'suu kantsu'

  isConditionMet(): boolean {
    return false
  }
}
