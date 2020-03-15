import groupBy from 'lodash.groupby'
import { TileType, TileGroupType, TileGroupObjectType } from '../types/tileType'

export class Hand {
  tiles: TileType[]
  isCloseHand: boolean
  shuntsuGroups: TileGroupType[] = []
  koutsuGroups: TileGroupObjectType = {}
  kantsuGroups: TileGroupObjectType = {}
  toitsuGroups: TileGroupObjectType = {}
  koutsuKantsuGroups: TileGroupObjectType = {}

  constructor(tiles: TileType[]) {
    this.tiles = tiles
    this.isCloseHand = tiles.findIndex(tile => tile.isOpen) >= 0

    const groups = groupBy(tiles, 'tile')
    // this.getShuntsuGroups(groups)
    this.getKoutsuGroups(groups)
    this.getKantsuGroups(groups)
    this.getToitsuGroups(groups)
    this.koutsuKantsuGroups = Object.assign(
      {},
      this.koutsuGroups,
      this.kantsuGroups,
    )
  }

  // private getShuntsuGroups(groups: TileGroupObjectType): void {
  // }

  private getKoutsuGroups(groups: TileGroupObjectType): void {
    Object.keys(groups).forEach(tileName => {
      if (groups[tileName].length === 3) {
        this.koutsuGroups[tileName] = groups[tileName]
      }
    })
  }

  private getKantsuGroups(groups: TileGroupObjectType): void {
    Object.keys(groups).forEach(tileName => {
      if (groups[tileName].length === 4) {
        this.koutsuGroups[tileName] = groups[tileName]
      }
    })
  }

  private getToitsuGroups(groups: TileGroupObjectType): void {
    Object.keys(groups).forEach(tileName => {
      if (groups[tileName].length === 2) {
        this.toitsuGroups[tileName] = groups[tileName]
      }
    })
  }
}
