import Yaku from '../yaku'

class Dora extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = 'ドラ'
  englishName = 'dora'

  isConditionMet(): boolean {
    return false
  }
}

export default Dora
