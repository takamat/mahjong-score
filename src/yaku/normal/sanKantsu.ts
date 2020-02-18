import Yaku from '../yaku'

class SanKantsu extends Yaku {
  hanOpen = 2
  hanClose = 2
  isYakuman = false
  name = '三槓子'
  englishName = 'san kantsu'

  isConditionMet(): boolean {
    return false
  }
}

export default SanKantsu
