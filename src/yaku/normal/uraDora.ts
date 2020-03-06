import Yaku from '../yaku'

class UraDora extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = '裏ドラ'
  englishName = 'ura dora'

  getHan(): number {
    return this.hand.isCloseHand
      ? this.hanClose * this.handConfig.uraDoraNumber
      : 0
  }

  isConditionMet(): boolean {
    return this.handConfig.uraDoraNumber > 0
  }
}

export default UraDora
