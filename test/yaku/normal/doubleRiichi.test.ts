import { DoubleRiichi } from './../../../src/yaku/normal/doubleRiichi'
import { Tile } from './../../../src/constants/tile'
import { Hand } from './../../../src/hand/hand'

const tiles = [
  { tile: Tile.Sou1 },
  { tile: Tile.Sou1 },
  { tile: Tile.Man1 },
  { tile: Tile.Man1 },
  { tile: Tile.Man1 },
  { tile: Tile.Man4 },
  { tile: Tile.Man5 },
  { tile: Tile.Man6 },
  { tile: Tile.Pin7 },
  { tile: Tile.Pin7 },
  { tile: Tile.Pin7 },
  { tile: Tile.Ton },
  { tile: Tile.Ton, isWinTile: true },
  { tile: Tile.Ton },
  { tile: Tile.Pei },
]

test('test is double riichi', () => {
  const handConfig = {
    baKaze: Tile.Ton,
    jiKaze: Tile.Nan,
    doraNumber: 0,
    akaDoraNumber: 0,
    uraDoraNumber: 0,
    isTsumo: false,
    isRiichi: false,
    isDoubleRiichi: true,
    isIppatsu: false,
    isChankan: false,
    isRinshankaihoh: false,
    isHaitei: false,
    isHoutei: false,
  }
  const hand = new Hand(tiles, [0, 1])
  const doubleRiichi = new DoubleRiichi(hand, handConfig)
  expect(doubleRiichi.isConditionMet()).toBeTruthy()
})
