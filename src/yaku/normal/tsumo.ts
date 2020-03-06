import Yaku from '../yaku'

class Tsumo extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = '門前清自摸和'
  englishName = 'menzenchin tsumohou'

  isConditionMet(): boolean {
    return this.handConfig.isTsumo
  }
}

export default Tsumo
