import { Yaku } from '../yaku'

export class Tsumo extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = '門前清自摸和'
  englishName = 'menzenchin tsumohou'

  isConditionMet(): boolean {
    return this.handConfig.isTsumo
  }
}
