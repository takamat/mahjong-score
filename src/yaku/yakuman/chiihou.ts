import Yaku from './../yaku'

class Chiihou extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '地和'
  englishName = 'chiihou'

  isConditionMet(): boolean {
    return false
  }
}

export default Chiihou
