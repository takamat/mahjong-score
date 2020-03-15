import { Tile } from '../constants/tile'

export type TileType = {
  tile: Tile
  isOpen?: boolean
  isWinTile?: boolean
}

export type TileGroupType = TileType[]

export type TileGroupObjectType = { [P in Tile]: TileGroupType }
