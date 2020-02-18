import Yaku from '../yaku'

class YakuhaiSouth extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(南)'
  englishName = 'yakuhai (south)'

  isConditionMet(): boolean {
    return false
  }
}

export default YakuhaiSouth
