import { Yaku } from '../yaku'
import { Suit } from '../../constants/suit'

export class Chinitsu extends Yaku {
  hanOpen = 5
  hanClose = 6
  isYakuman = false
  name = '清一色'
  englishName = 'chiniisou'

  isConditionMet(): boolean {
    const suits = this.hand.mentsuList.map(mentsu => mentsu.suit)

    console.log(suits)
    console.log(suits.every(suit => Suit.Man))
    console.log(this.hand.jantou)

    if (suits.every(suit => Suit.Man) && this.hand.jantou?.suit === Suit.Man) {
      return true
    }

    if (suits.every(suit => Suit.Pin) && this.hand.jantou?.suit === Suit.Pin) {
      return true
    }

    if (suits.every(suit => Suit.Sou) && this.hand.jantou?.suit === Suit.Sou) {
      return true
    }

    return false
  }
}
