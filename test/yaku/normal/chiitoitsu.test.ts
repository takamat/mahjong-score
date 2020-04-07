import { Chiitoitsu } from './../../../src/yaku/normal/chiitoitsu'
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

test('test is chiitoitsu', () => {
  const tiles = [
    { tile: Tile.Man1 },
    { tile: Tile.Man1 },
    { tile: Tile.Man2 },
    { tile: Tile.Man2 },
    { tile: Tile.Man3 },
    { tile: Tile.Man3 },
    { tile: Tile.Pin4 },
    { tile: Tile.Pin4 },
    { tile: Tile.Pin5 },
    { tile: Tile.Pin5 },
    { tile: Tile.Sou6 },
    { tile: Tile.Sou6 },
    { tile: Tile.Ton, isWinTile: true },
    { tile: Tile.Ton },
  ]
  const hand = new Hand(tiles)
  const chiitoitsu = new Chiitoitsu(hand, handConfig)
  expect(chiitoitsu.isConditionMet()).toBeTruthy()
})

test('test is chiitoitsu (kantsu)', () => {
  const tiles = [
    { tile: Tile.Man1 },
    { tile: Tile.Man1 },
    { tile: Tile.Man2 },
    { tile: Tile.Man2 },
    { tile: Tile.Man3 },
    { tile: Tile.Man3 },
    { tile: Tile.Pin4 },
    { tile: Tile.Pin4 },
    { tile: Tile.Pin5 },
    { tile: Tile.Pin5 },
    { tile: Tile.Ton },
    { tile: Tile.Ton },
    { tile: Tile.Ton, isWinTile: true },
    { tile: Tile.Ton },
  ]
  const hand = new Hand(tiles)
  const chiitoitsu = new Chiitoitsu(hand, handConfig)
  expect(chiitoitsu.isConditionMet()).toBeFalsy()
})
