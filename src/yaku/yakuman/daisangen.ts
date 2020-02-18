import Yaku from './../yaku'

class Daisangen extends Yaku {
  hanOpen = null
  hanClose = null
  isYakuman = true
  name = '大三元'
  englishName = 'daisangen'

  isConditionMet(): boolean {
    return false
  }
}

export default Daisangen
