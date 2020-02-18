import Yaku from '../yaku'

class YakuhaiHatsu extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(發)'
  englishName = 'yakuhai (hatsu)'

  isConditionMet(): boolean {
    return false
  }
}

export default YakuhaiHatsu
