import { Yaku } from '../yaku'

export class Ippatsu extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = '一発'
  englishName = 'ippatsu'

  isConditionMet(): boolean {
    return this.handConfig.isIppatsu
  }
}
