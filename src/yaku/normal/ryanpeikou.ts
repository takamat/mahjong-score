import Yaku from '../yaku'

class Ryanpeikou extends Yaku {
  hanOpen = null
  hanClose = 3
  isYakuman = false
  name = '二盃口'
  englishName = 'ryanpeikou'

  isConditionMet(): boolean {
    return false
  }
}

export default Ryanpeikou
