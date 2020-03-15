import { Yaku } from '../yaku'

export class YakuhaiOfRound extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(自風)'
  englishName = 'yakuhai (wind of round)'

  isConditionMet(): boolean {
    return Object.prototype.hasOwnProperty.call(
      this.hand.koutsuKantsuGroups,
      this.handConfig.jiKaze,
    )
  }
}
