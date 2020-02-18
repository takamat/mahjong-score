import Yaku from '../yaku'

class Pinfu extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = '平和'
  englishName = 'pinfu'

  isConditionMet(): boolean {
    return false
  }
}

export default Pinfu
