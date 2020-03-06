import Yaku from '../yaku'

class Riichi extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = '立直'
  englishName = 'riichi'

  isConditionMet(): boolean {
    return this.handConfig.isRiichi
  }
}

export default Riichi
