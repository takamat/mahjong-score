import Yaku from '../yaku'
import Tile from './../../constants/tile'

class YakuhaiHaku extends Yaku {
  hanOpen = 1
  hanClose = 1
  isYakuman = false
  name = '役牌(白)'
  englishName = 'yakuhai (haku)'

  isConditionMet(): boolean {
    return Object.prototype.hasOwnProperty.call(
      this.hand.koutsuKantsuGroups,
      Tile.Haku,
    )
  }
}

export default YakuhaiHaku
