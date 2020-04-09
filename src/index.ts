import { sortTiles, chooseJuntouCandidates } from './utils'
import { Tile } from './constants/tile'
import { Hand } from './hand/hand'
import { judgeYaku } from './yaku/judgeYaku'
import { calcScore } from './calcScore'
import { TileListType } from './types/tileType'
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
  tiles: TileListType,
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
  const sortedTiles = sortTiles(tiles)
  const juntouCandidates = chooseJuntouCandidates(sortedTiles)
  const hand = new Hand(sortedTiles, juntouCandidates[0])
  const yakuList = judgeYaku(hand, handConfig)

  return calcScore(yakuList, handConfig)
}

export default mahjongScore
