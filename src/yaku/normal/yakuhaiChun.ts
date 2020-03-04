import Yaku from '../yaku'
import Tile from './../../constants/tile'

class YakuhaiChun extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(中)'
  englishName = 'yakuhai (chun)'

  isConditionMet(): boolean {
    return Object.prototype.hasOwnProperty.call(
      this.hand.koutsuKantsuGroups,
      Tile.Chun,
    )
  }
}

export default YakuhaiChun
