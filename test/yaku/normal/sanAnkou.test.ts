import mahjongScore from '../../../src/index'
import { Tile } from '../../../src/constants/tile'

const handConfig = {
  baKaze: Tile.Ton,
  jiKaze: Tile.Nan,
}

test('test is san ankou', () => {
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
    { tile: Tile.Pin4 },
    { tile: Tile.Pin5 },
  ]
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('三暗刻')
})

test('test is san ankou (open)', () => {
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
    { tile: Tile.Pin4 },
    { tile: Tile.Pin5 },
  ]
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).not.toContain('三暗刻')
})
