import Yaku from '../yaku'

class Chinitsu extends Yaku {
  hanOpen = 5
  hanClose = 6
  isYakuman = false
  name = '清一色'
  englishName = 'chiniisou'

  isConditionMet(): boolean {
    return false
  }
}

export default Chinitsu
