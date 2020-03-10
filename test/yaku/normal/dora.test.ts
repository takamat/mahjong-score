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

test('test is dora', () => {
  const handConfig = {
    baKaze: Tile.Ton,
    jiKaze: Tile.Nan,
    doraNumber: 1,
  }
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('ドラ')
})

test('test is aka dora', () => {
  const handConfig = {
    baKaze: Tile.Ton,
    jiKaze: Tile.Nan,
    akaDoraNumber: 2,
  }
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('赤ドラ')
})

test('test is ura dora', () => {
  const handConfig = {
    baKaze: Tile.Ton,
    jiKaze: Tile.Nan,
    uraDoraNumber: 3,
  }
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('裏ドラ')
})
