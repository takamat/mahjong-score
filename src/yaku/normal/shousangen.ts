import { Yaku } from '../yaku'

export class Shousangen extends Yaku {
  hanOpen = 2
  hanClose = 2
  isYakuman = false
  name = '小三元'
  englishName = 'shousangen'

  isConditionMet(): boolean {
    return false
  }
}
