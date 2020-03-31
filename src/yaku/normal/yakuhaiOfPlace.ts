import { Yaku } from '../yaku'

export class YakuhaiOfPlace extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(場風)'
  englishName = 'yakuhai (wind of place)'

  isConditionMet(): boolean {
    return (
      this.hand.koutsuKantsuList.findIndex(
        mentsu => mentsu.tile === this.handConfig.baKaze,
      ) >= 0
    )
  }
}
