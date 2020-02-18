import Yaku from '../yaku'

class Honroutou extends Yaku {
  hanOpen = 2
  hanClose = 2
  isYakuman = false
  name = '混老頭'
  englishName = 'honroutou'

  isConditionMet(): boolean {
    return false
  }
}

export default Honroutou
