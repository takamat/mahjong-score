import { Yaku } from '../yaku'

export class Sanshoku extends Yaku {
  hanOpen = 1
  hanClose = 2
  isYakuman = false
  name = '三色同順'
  englishName = 'sanshoku doujun'

  isConditionMet(): boolean {
    return false
  }
}
