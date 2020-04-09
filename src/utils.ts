import { Tile } from './constants/tile'
import { TileType, TileListType } from './types/tileType'

export const sortTiles = (tiles: TileListType): TileListType => {
  const orderRule = Object.values(Tile)
  return tiles
    .slice()
    .sort(
      (a: TileType, b: TileType) =>
        orderRule.indexOf(a.tile) - orderRule.indexOf(b.tile),
    )
}

export const chooseJuntouCandidates = (
  tiles: TileListType,
): Array<[number, number]> => {
  const juntouCandidates: Array<[number, number]> = []
  const uniqJuntouCandidates: Array<[number, number]> = []

  tiles.forEach((srcTile, srcIndex) => {
    tiles.forEach((destTile, destIndex) => {
      if (srcTile.tile === destTile.tile && srcIndex !== destIndex) {
        juntouCandidates.push([srcIndex, destIndex])
      }
    })
  })

  juntouCandidates.forEach(juntouCandidate => {
    if (uniqJuntouCandidates.length <= 0) {
      uniqJuntouCandidates.push(juntouCandidate)
    }

    const duplicates = uniqJuntouCandidates.filter(uniqJuntouCandidate => {
      return (
        juntouCandidate.join() === uniqJuntouCandidate.join() ||
        juntouCandidate.join() ===
          uniqJuntouCandidate
            .slice()
            .reverse()
            .join()
      )
    })

    if (duplicates.length <= 0) {
      uniqJuntouCandidates.push(juntouCandidate)
    }
  })

  return uniqJuntouCandidates
}
