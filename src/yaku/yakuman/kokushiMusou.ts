import { Yaku } from './../yaku'

export class KokushiMusou extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '国士無双'
  englishName = 'kokushi musou'

  isConditionMet(): boolean {
    return false
  }
}
