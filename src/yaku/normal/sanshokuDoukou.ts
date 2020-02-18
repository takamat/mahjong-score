import Yaku from '../yaku'

class SanshokuDoukou extends Yaku {
  hanOpen = 2
  hanClose = 2
  isYakuman = false
  name = '三色同刻'
  englishName = 'sanshoku doukou'

  isConditionMet(): boolean {
    return false
  }
}

export default SanshokuDoukou
