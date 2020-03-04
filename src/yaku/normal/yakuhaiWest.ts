import Yaku from '../yaku'
import Tile from './../../constants/tile'

class YakuhaiWest extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(西)'
  englishName = 'yakuhai (west)'

  isConditionMet(): boolean {
    return Object.prototype.hasOwnProperty.call(
      this.hand.koutsuKantsuGroups,
      Tile.Sha,
    )
  }
}

export default YakuhaiWest
