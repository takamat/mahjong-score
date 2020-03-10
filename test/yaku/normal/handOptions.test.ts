import mahjongScore from '../../../src/index'
import Tile from '../../../src/constants/tile'

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

test('test is riichi', () => {
  const handConfig = {
    baKaze: Tile.Ton,
    jiKaze: Tile.Nan,
    isRiichi: true,
  }
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('立直')
})

test('test is double riichi', () => {
  const handConfig = {
    baKaze: Tile.Ton,
    jiKaze: Tile.Nan,
    isDoubleRiichi: true,
  }
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('ダブルリーチ')
})

test('test is ippatsu', () => {
  const handConfig = {
    baKaze: Tile.Ton,
    jiKaze: Tile.Nan,
    isIppatsu: true,
  }
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('一発')
})

test('test is tsumo', () => {
  const handConfig = {
    baKaze: Tile.Ton,
    jiKaze: Tile.Nan,
    isTsumo: true,
  }
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('門前清自摸和')
})

test('test is chankan', () => {
  const handConfig = {
    baKaze: Tile.Ton,
    jiKaze: Tile.Nan,
    isChankan: true,
  }
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('槍槓')
})

test('test is rinshankaihoh', () => {
  const handConfig = {
    baKaze: Tile.Ton,
    jiKaze: Tile.Nan,
    isRinshankaihoh: true,
  }
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('嶺上開花')
})

test('test is haitei', () => {
  const handConfig = {
    baKaze: Tile.Ton,
    jiKaze: Tile.Nan,
    isHaitei: true,
  }
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('海底撈月')
})

test('test is houtei', () => {
  const handConfig = {
    baKaze: Tile.Ton,
    jiKaze: Tile.Nan,
    isHoutei: true,
  }
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('河底撈魚')
})
