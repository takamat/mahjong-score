import { Chinitsu } from '../../../src/yaku/normal/chinitsu'
import { Tile } from '../../../src/constants/tile'
import { Hand } from '../../../src/hand/hand'

const handConfig = {
  baKaze: Tile.Ton,
  jiKaze: Tile.Nan,
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
}

test('test is chinitsu', () => {
  const tiles = [
    { tile: Tile.Man1 },
    { tile: Tile.Man1 },
    { tile: Tile.Man1 },
    { tile: Tile.Man2 },
    { tile: Tile.Man2 },
    { tile: Tile.Man2 },
    { tile: Tile.Man3 },
    { tile: Tile.Man4 },
    { tile: Tile.Man5 },
    { tile: Tile.Man6 },
    { tile: Tile.Man7 },
    { tile: Tile.Man8 },
    { tile: Tile.Man9, isWinTile: true },
    { tile: Tile.Man9 },
  ]
  const hand = new Hand(tiles)
  const chinitsu = new Chinitsu(hand, handConfig)
  expect(chinitsu.isConditionMet()).toBeTruthy()
})
