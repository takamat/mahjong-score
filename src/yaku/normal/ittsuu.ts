import Yaku from '../yaku'

class Ittsuu extends Yaku {
  hanOpen = 1
  hanClose = 2
  isYakuman = false
  name = '一気通貫'
  englishName = 'ikkitsuukan'

  isConditionMet(): boolean {
    return false
  }
}

export default Ittsuu
