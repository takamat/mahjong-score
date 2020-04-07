import { Toitoi } from './../../../src/yaku/normal/toitoi'
import { Tile } from './../../../src/constants/tile'
import { Hand } from './../../../src/hand/hand'

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

test('test is toitoi (closed)', () => {
  const tiles = [
    { tile: Tile.Man1 },
    { tile: Tile.Man1 },
    { tile: Tile.Man1 },
    { tile: Tile.Man3 },
    { tile: Tile.Man3 },
    { tile: Tile.Man3 },
    { tile: Tile.Man7 },
    { tile: Tile.Man7 },
    { tile: Tile.Man7 },
    { tile: Tile.Man7, isWinTile: true },
    { tile: Tile.Sou8 },
    { tile: Tile.Sou8 },
    { tile: Tile.Pin3 },
    { tile: Tile.Pin3 },
    { tile: Tile.Pin3 },
  ]
  const hand = new Hand(tiles)
  const toitoi = new Toitoi(hand, handConfig)
  expect(toitoi.isConditionMet()).toBeTruthy()
})

test('test is toitoi (open)', () => {
  const tiles = [
    { tile: Tile.Man1 },
    { tile: Tile.Man1 },
    { tile: Tile.Man1 },
    { tile: Tile.Man5 },
    { tile: Tile.Man5 },
    { tile: Tile.Man5 },
    { tile: Tile.Man9 },
    { tile: Tile.Man9, isOpen: true },
    { tile: Tile.Man9, isWinTile: true },
    { tile: Tile.Sou8 },
    { tile: Tile.Sou8 },
    { tile: Tile.Pin3 },
    { tile: Tile.Pin3 },
    { tile: Tile.Pin3 },
  ]
  const hand = new Hand(tiles)
  const toitoi = new Toitoi(hand, handConfig)
  expect(toitoi.isConditionMet()).toBeTruthy()
})
