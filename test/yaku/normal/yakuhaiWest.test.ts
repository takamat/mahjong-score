import { YakuhaiWest } from './../../../src/yaku/normal/yakuhaiWest'
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

test('test is yakuhai sha', () => {
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
    { tile: Tile.Sha },
    { tile: Tile.Sha, isWinTile: true },
    { tile: Tile.Sha },
    { tile: Tile.Ton },
  ]
  const hand = new Hand(tiles)
  const yakuhaiWest = new YakuhaiWest(hand, handConfig)
  expect(yakuhaiWest.isConditionMet()).toBeTruthy()
})
