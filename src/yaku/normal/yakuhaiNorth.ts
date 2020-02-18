import Yaku from '../yaku'

class YakuhaiNorth extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(北)'
  englishName = 'yakuhai (north)'

  isConditionMet(): boolean {
    return false
  }
}

export default YakuhaiNorth
