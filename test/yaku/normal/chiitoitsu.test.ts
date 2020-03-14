import mahjongScore from '../../../src/index'
import Tile from '../../../src/constants/tile'

const handConfig = {
  baKaze: Tile.Ton,
  jiKaze: Tile.Nan,
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
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('七対子')
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
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).not.toContain('七対子')
})
