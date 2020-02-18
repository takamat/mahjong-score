import Yaku from './../yaku'

class SuuAnkou extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '四暗刻'
  englishName = 'suu ankou'

  isConditionMet(): boolean {
    return false
  }
}

export default SuuAnkou
