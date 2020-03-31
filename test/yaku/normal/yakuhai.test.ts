import mahjongScore from './../../../src/index'
import { Tile } from './../../../src/constants/tile'

const handConfig = {
  baKaze: Tile.Ton,
  jiKaze: Tile.Nan,
}

test('test is yakuhai bakaze', () => {
  const tiles = [
    { tile: Tile.Man4 },
    { tile: Tile.Man5 },
    { tile: Tile.Man6 },
    { tile: Tile.Man1 },
    { tile: Tile.Man1 },
    { tile: Tile.Man1 },
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
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('役牌(場風)')
})

test('test is yakuhai jikaze', () => {
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
    { tile: Tile.Nan },
    { tile: Tile.Nan, isWinTile: true },
    { tile: Tile.Nan },
    { tile: Tile.Pei },
  ]
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('役牌(自風)')
})

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
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('役牌(東)')
})

test('test is yakuhai nan', () => {
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
    { tile: Tile.Nan },
    { tile: Tile.Nan, isWinTile: true },
    { tile: Tile.Nan },
    { tile: Tile.Ton },
  ]
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('役牌(南)')
})

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
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('役牌(西)')
})

test('test is yakuhai pei', () => {
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
    { tile: Tile.Pei },
    { tile: Tile.Pei, isWinTile: true },
    { tile: Tile.Pei },
    { tile: Tile.Ton },
  ]
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('役牌(北)')
})

test('test is yakuhai haku', () => {
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
    { tile: Tile.Haku },
    { tile: Tile.Haku, isWinTile: true },
    { tile: Tile.Haku },
    { tile: Tile.Ton },
  ]
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('役牌(白)')
})

test('test is yakuhai hatsu', () => {
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
    { tile: Tile.Hatsu },
    { tile: Tile.Hatsu, isWinTile: true },
    { tile: Tile.Hatsu },
    { tile: Tile.Ton },
  ]
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('役牌(發)')
})

test('test is yakuhai chun', () => {
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
    { tile: Tile.Chun },
    { tile: Tile.Chun, isWinTile: true },
    { tile: Tile.Chun },
    { tile: Tile.Ton },
  ]
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('役牌(中)')
})
