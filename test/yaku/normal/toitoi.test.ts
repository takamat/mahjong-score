import mahjongScore from '../../../src/index'
import { Tile } from '../../../src/constants/tile'

const handConfig = {
  baKaze: Tile.Ton,
  jiKaze: Tile.Nan,
}

test('test is toitoi (closed)', () => {
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
    { tile: Tile.Pin3 },
    { tile: Tile.Pin3 },
  ]
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('対々和')
})

test('test is toitoi (open)', () => {
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
    { tile: Tile.Pin3 },
    { tile: Tile.Pin3 },
  ]
  const result = mahjongScore(tiles, handConfig)
  expect(result.yaku).toContain('対々和')
})
