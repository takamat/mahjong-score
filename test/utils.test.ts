import { chooseJuntouCandidates } from '../src/utils'
import { Tile } from '../src/constants/tile'
import { Hand } from '../src/hand/hand'

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

test('test is juntouCandidate', () => {
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

  expect(chooseJuntouCandidates(tiles)).toEqual([
    [0, 1],
    [0, 2],
    [1, 2],
    [6, 7],
    [6, 8],
    [7, 8],
    [9, 10],
    [11, 12],
    [11, 13],
    [12, 13],
  ])
})
