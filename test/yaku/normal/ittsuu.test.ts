import { Ittsuu } from './../../../src/yaku/normal/ittsuu'
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

test('test is ittsuu (man)', () => {
  const tiles = [
    { tile: Tile.Pin5 },
    { tile: Tile.Pin5 },
    { tile: Tile.Man1 },
    { tile: Tile.Man2 },
    { tile: Tile.Man3 },
    { tile: Tile.Man4 },
    { tile: Tile.Man5 },
    { tile: Tile.Man6 },
    { tile: Tile.Man7 },
    { tile: Tile.Man8 },
    { tile: Tile.Man9 },
    { tile: Tile.Sou7, isWinTile: true },
    { tile: Tile.Sou8 },
    { tile: Tile.Sou9 },
  ]
  const hand = new Hand(tiles, [0, 1])
  const ittsuu = new Ittsuu(hand, handConfig)
  expect(ittsuu.isConditionMet()).toBeTruthy()
})

test('test is ittsuu (pin)', () => {
  const tiles = [
    { tile: Tile.Pin5 },
    { tile: Tile.Pin5 },
    { tile: Tile.Pin1 },
    { tile: Tile.Pin2 },
    { tile: Tile.Pin3 },
    { tile: Tile.Pin4 },
    { tile: Tile.Pin5 },
    { tile: Tile.Pin6 },
    { tile: Tile.Pin7 },
    { tile: Tile.Pin8 },
    { tile: Tile.Pin9 },
    { tile: Tile.Sou7, isWinTile: true },
    { tile: Tile.Sou8 },
    { tile: Tile.Sou9 },
  ]
  const hand = new Hand(tiles, [0, 1])
  const ittsuu = new Ittsuu(hand, handConfig)
  expect(ittsuu.isConditionMet()).toBeTruthy()
})

test('test is ittsuu (sou)', () => {
  const tiles = [
    { tile: Tile.Pin5 },
    { tile: Tile.Pin5 },
    { tile: Tile.Sou1 },
    { tile: Tile.Sou2 },
    { tile: Tile.Sou3 },
    { tile: Tile.Sou4 },
    { tile: Tile.Sou5 },
    { tile: Tile.Sou6 },
    { tile: Tile.Sou7 },
    { tile: Tile.Sou8 },
    { tile: Tile.Sou9 },
    { tile: Tile.Sou7, isWinTile: true },
    { tile: Tile.Sou8 },
    { tile: Tile.Sou9 },
  ]
  const hand = new Hand(tiles, [0, 1])
  const ittsuu = new Ittsuu(hand, handConfig)
  expect(ittsuu.isConditionMet()).toBeTruthy()
})
