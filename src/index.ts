import Tile from './constants/tile'
import Hand from './hand/hand'
import handCalculator from './hand/handCalculator'
import { TileGroupType } from './types/tileType'
import { Result } from './types/resultType'

type handOptionsType = {
  doraNumber?: number
  akaDoraNumber?: number
  uraDoraNumber?: number
  baKaze: Tile
  jiKaze: Tile
  isTsumo?: boolean
  isRiichi?: boolean
  isDoubleRiichi?: boolean
  isIppatsu?: boolean
  isChankan?: boolean
  isRinshankaihoh?: boolean
  isHaitei?: boolean
  isHoutei?: boolean
}

const mahjongScore = (
  tiles: TileGroupType,
  handOptions: handOptionsType,
): Result => {
  const handConfig = Object.assign(
    {
      doraNumber: 0,
      akaDoraNumber: 0,
      uraDoraNumber: 0,
      isTsumo: false,
      isRiichi: false,
      isDoubleRiichi: false,
      isIppatsu: false,
      isChankan: false,
      isRinshankaihoh: false,
      isHaitei: false,
      isHoutei: false,
    },
    handOptions,
  )
  const hand = new Hand(tiles)

  return handCalculator(hand, handConfig)
}

export default mahjongScore
