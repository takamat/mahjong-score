import { Yaku } from '../yaku'

export class YakuhaiOfRound extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(自風)'
  englishName = 'yakuhai (wind of round)'

  isConditionMet(): boolean {
    return (
      this.hand.koutsuKantsuList.findIndex(
        mentsu => mentsu.tile === this.handConfig.jiKaze,
      ) >= 0
    )
  }
}
