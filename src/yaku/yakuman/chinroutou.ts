import Yaku from './../yaku'

class Chinroutou extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '清老頭'
  englishName = 'chinroutou'

  isConditionMet(): boolean {
    return false
  }
}

export default Chinroutou
