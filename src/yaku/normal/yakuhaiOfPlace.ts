import Yaku from '../yaku'

class YakuhaiOfPlace extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(場風)'
  englishName = 'yakuhai (wind of place)'

  isConditionMet(): boolean {
    return Object.prototype.hasOwnProperty.call(
      this.hand.koutsuKantsuGroups,
      this.handConfig.baKaze,
    )
  }
}

export default YakuhaiOfPlace
