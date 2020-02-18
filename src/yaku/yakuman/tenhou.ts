import Yaku from './../yaku'

class Tenhou extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '天和'
  englishName = 'tenhou'

  isConditionMet(): boolean {
    return false
  }
}

export default Tenhou
