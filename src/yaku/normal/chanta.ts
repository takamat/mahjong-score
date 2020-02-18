import Yaku from '../yaku'

class Chanta extends Yaku {
  hanOpen = 1
  hanClose = 2
  isYakuman = false
  name = '混全帯么九'
  englishName = 'hon chantai yaochu'

  isConditionMet(): boolean {
    return false
  }
}

export default Chanta
