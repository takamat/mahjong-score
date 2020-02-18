import Yaku from './../yaku'

class Tsuuiisou extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '字一色'
  englishName = 'tsuuiisou'

  isConditionMet(): boolean {
    return false
  }
}

export default Tsuuiisou
