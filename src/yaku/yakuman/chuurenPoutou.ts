import { Yaku } from './../yaku'

export class ChuurenPoutou extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '九蓮宝燈'
  englishName = 'chuuren poutou'

  isConditionMet(): boolean {
    return false
  }
}
