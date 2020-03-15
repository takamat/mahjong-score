import { Yaku } from './../yaku'

export class Ryuuiisou extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '緑一色'
  englishName = 'ryuuiisou'

  isConditionMet(): boolean {
    return false
  }
}
