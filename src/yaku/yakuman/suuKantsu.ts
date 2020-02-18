import Yaku from './../yaku'

class SuuKantsu extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '四槓子'
  englishName = 'suu kantsu'

  isConditionMet(): boolean {
    return false
  }
}

export default SuuKantsu
