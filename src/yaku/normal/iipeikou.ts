import { Yaku } from '../yaku'

export class Iipeikou extends Yaku {
  hanOpen = null
  hanClose = 1
  isYakuman = false
  name = '一盃口'
  englishName = 'iipeikou'

  isConditionMet(): boolean {
    return false
  }
}
