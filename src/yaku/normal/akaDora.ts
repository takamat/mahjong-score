import Yaku from '../yaku'

class AkaDora extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = '赤ドラ'
  englishName = 'aka dora'

  isConditionMet(): boolean {
    return false
  }
}

export default AkaDora
