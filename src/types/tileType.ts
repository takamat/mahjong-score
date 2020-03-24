import { Tile } from '../constants/tile'

export type TileType = {
  tile: Tile
  isOpen?: boolean
  isWinTile?: boolean
}

export type TileListType = TileType[]

export type TileListGroupType = { [P in Tile]: TileListType }
