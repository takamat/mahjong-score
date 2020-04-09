import { YakuhaiHatsu } from './../../../src/yaku/normal/yakuhaiHatsu'
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

test('test is yakuhai hatsu', () => {
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
    { tile: Tile.Hatsu },
    { tile: Tile.Hatsu, isWinTile: true },
    { tile: Tile.Hatsu },
    { tile: Tile.Ton },
  ]
  const hand = new Hand(tiles, [0, 1])
  const yakuhaiHatsu = new YakuhaiHatsu(hand, handConfig)
  expect(yakuhaiHatsu.isConditionMet()).toBeTruthy()
})
