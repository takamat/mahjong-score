import Yaku from '../yaku'

class YakuhaiWest extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(西)'
  englishName = 'yakuhai (west)'

  isConditionMet(): boolean {
    return false
  }
}

export default YakuhaiWest
