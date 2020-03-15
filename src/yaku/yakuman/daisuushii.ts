import { Yaku } from './../yaku'

export class Daisuushii extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '大四喜'
  englishName = 'daisuushii'

  isConditionMet(): boolean {
    return false
  }
}
