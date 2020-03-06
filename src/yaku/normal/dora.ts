import Yaku from '../yaku'

class Dora extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = 'ドラ'
  englishName = 'dora'

  getHan(): number {
    return this.hand.isCloseHand
      ? this.hanClose * this.handConfig.doraNumber
      : 0
  }

  isConditionMet(): boolean {
    return this.handConfig.doraNumber > 0
  }
}

export default Dora
