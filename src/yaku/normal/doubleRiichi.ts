import Yaku from '../yaku'

class DoubleRiichi extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = 'ダブルリーチ'
  englishName = 'double riichi'

  isConditionMet(): boolean {
    return this.handConfig.isDoubleRiichi
  }
}

export default DoubleRiichi
