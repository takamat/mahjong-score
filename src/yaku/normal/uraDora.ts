import Yaku from '../yaku'

class UraDora extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = '裏ドラ'
  englishName = 'ura dora'

  isConditionMet(): boolean {
    return false
  }
}

export default UraDora
