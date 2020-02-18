import Yaku from '../yaku'

class DoubleRiichi extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = 'ダブルリーチ'
  englishName = 'double riichi'

  isConditionMet(): boolean {
    return false
  }
}

export default DoubleRiichi
