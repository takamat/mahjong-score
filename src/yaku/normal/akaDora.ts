import Yaku from '../yaku'

class AkaDora extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = '赤ドラ'
  englishName = 'aka dora'

  getHan(): number {
    return this.hand.isCloseHand
      ? this.hanClose * this.handConfig.akaDoraNumber
      : 0
  }

  isConditionMet(): boolean {
    return this.handConfig.akaDoraNumber > 0
  }
}

export default AkaDora
