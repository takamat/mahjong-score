import { Yaku } from '../yaku'

export class Haitei extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '海底撈月'
  englishName = 'haitei raoyue'

  isConditionMet(): boolean {
    return this.handConfig.isHaitei
  }
}
