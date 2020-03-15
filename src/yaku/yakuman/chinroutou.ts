import { Yaku } from './../yaku'

export class Chinroutou extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '清老頭'
  englishName = 'chinroutou'

  isConditionMet(): boolean {
    return false
  }
}
