import Yaku from '../yaku'

class Honitsu extends Yaku {
  hanOpen = 2
  hanClose = 3
  isYakuman = false
  name = '混一色'
  englishName = 'honiisou'

  isConditionMet(): boolean {
    return false
  }
}

export default Honitsu
