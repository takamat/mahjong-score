import Yaku from '../yaku'

class Rinshan extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '嶺上開花'
  englishName = 'rinshan kaihou'

  isConditionMet(): boolean {
    return this.handConfig.isRinshankaihoh
  }
}

export default Rinshan
