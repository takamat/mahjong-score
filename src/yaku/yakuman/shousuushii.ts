import { Yaku } from './../yaku'

export class Shousuushii extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '小四喜'
  englishName = 'shousuushii'

  isConditionMet(): boolean {
    return false
  }
}
