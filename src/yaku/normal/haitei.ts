import Yaku from '../yaku'

class Haitei extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '海底撈月'
  englishName = 'haitei raoyue'

  isConditionMet(): boolean {
    return false
  }
}

export default Haitei
