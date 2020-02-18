import Yaku from '../yaku'

class YakuhaiOfRound extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(自風)'
  englishName = 'yakuhai (wind of round)'

  isConditionMet(): boolean {
    return false
  }
}

export default YakuhaiOfRound
