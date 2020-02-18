import { Tiles34Type } from './../types/tilesType'
import HandConfigType from './../types/handConfigType'

abstract class Yaku {
  private readonly tiles: Tiles34Type
  private readonly handConfig: HandConfigType
  abstract hanOpen: number | null
  abstract hanClose: number | null
  abstract isYakuman: boolean
  abstract name: string
  abstract englishName: string

  constructor(tiles: Tiles34Type, handConfig: HandConfigType) {
    this.tiles = tiles
    this.handConfig = handConfig
  }

  getHan(): number {
    const han = this.handConfig.isCloseHand ? this.hanClose : this.hanOpen
    return han ?? 0
  }

  abstract isConditionMet(): boolean
}

export default Yaku
