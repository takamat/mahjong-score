import Yaku from '../yaku'

class Chiitoitsu extends Yaku {
  hanOpen = null
  hanClose = 2
  isYakuman = false
  name = '七対子'
  englishName = 'chiitoitsu'

  isConditionMet(): boolean {
    return false
  }
}

export default Chiitoitsu
