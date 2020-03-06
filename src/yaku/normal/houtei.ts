import Yaku from '../yaku'

class Houtei extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '河底撈魚'
  englishName = 'houtei raoyui'

  isConditionMet(): boolean {
    return this.handConfig.isHoutei
  }
}

export default Houtei
