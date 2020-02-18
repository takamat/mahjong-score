import Yaku from './../yaku'

class KokushiMusou extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '国士無双'
  englishName = 'kokushi musou'

  isConditionMet(): boolean {
    return false
  }
}

export default KokushiMusou
