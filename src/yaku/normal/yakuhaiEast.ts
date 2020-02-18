import Yaku from '../yaku'

class YakuhaiEast extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(東)'
  englishName = 'yakuhai (east)'

  isConditionMet(): boolean {
    return false
  }
}

export default YakuhaiEast
