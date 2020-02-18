import Yaku from '../yaku'

class SanAnkou extends Yaku {
  hanOpen = 2
  hanClose = 2
  isYakuman = false
  name = '三暗刻'
  englishName = 'san ankou'

  isConditionMet(): boolean {
    return false
  }
}

export default SanAnkou
