import Yaku from '../yaku'

class YakuhaiHaku extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(白)'
  englishName = 'yakuhai (haku)'

  isConditionMet(): boolean {
    return false
  }
}

export default YakuhaiHaku
