import { YakuhaiEast } from './../../../src/yaku/normal/yakuhaiEast'
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

test('test is yakuhai ton', () => {
  const tiles = [
    { tile: Tile.Man1 },
    { tile: Tile.Man1 },
    { tile: Tile.Man1 },
    { tile: Tile.Man4 },
    { tile: Tile.Man5 },
    { tile: Tile.Man6 },
    { tile: Tile.Pin7 },
    { tile: Tile.Pin7 },
    { tile: Tile.Pin7 },
    { tile: Tile.Sou1 },
    { tile: Tile.Sou1 },
    { tile: Tile.Ton },
    { tile: Tile.Ton, isWinTile: true },
    { tile: Tile.Ton },
    { tile: Tile.Pei },
  ]
  const hand = new Hand(tiles)
  const yakuhaiEast = new YakuhaiEast(hand, handConfig)
  expect(yakuhaiEast.isConditionMet()).toBeTruthy()
})
