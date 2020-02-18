import Yaku from '../yaku'

class YakuhaiChun extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(中)'
  englishName = 'yakuhai (chun)'

  isConditionMet(): boolean {
    return false
  }
}

export default YakuhaiChun
