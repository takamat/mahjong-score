import { Suit } from './../../constants/suit'
import { Yaku } from '../yaku'

export class Ittsuu extends Yaku {
  hanOpen = 1
  hanClose = 2
  isYakuman = false
  name = '一気通貫'
  englishName = 'ikkitsuukan'

  isConditionMet(): boolean {
    if (this.hand.shuntsuList.length < 3) {
      return false
    }

    if (
      this.hand.shuntsuList.some(
        shuntsu => shuntsu.suit === Suit.Man && shuntsu.number === 2,
      ) &&
      this.hand.shuntsuList.some(
        shuntsu => shuntsu.suit === Suit.Man && shuntsu.number === 5,
      ) &&
      this.hand.shuntsuList.some(
        shuntsu => shuntsu.suit === Suit.Man && shuntsu.number === 7,
      )
    ) {
      return true
    }

    if (
      this.hand.shuntsuList.some(
        shuntsu => shuntsu.suit === Suit.Pin && shuntsu.number === 2,
      ) &&
      this.hand.shuntsuList.some(
        shuntsu => shuntsu.suit === Suit.Pin && shuntsu.number === 5,
      ) &&
      this.hand.shuntsuList.some(
        shuntsu => shuntsu.suit === Suit.Pin && shuntsu.number === 7,
      )
    ) {
      return true
    }

    if (
      this.hand.shuntsuList.some(
        shuntsu => shuntsu.suit === Suit.Sou && shuntsu.number === 2,
      ) &&
      this.hand.shuntsuList.some(
        shuntsu => shuntsu.suit === Suit.Sou && shuntsu.number === 5,
      ) &&
      this.hand.shuntsuList.some(
        shuntsu => shuntsu.suit === Suit.Sou && shuntsu.number === 7,
      )
    ) {
      return true
    }

    return false
  }
}
