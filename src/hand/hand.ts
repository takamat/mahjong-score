import groupBy from 'lodash.groupby'
import { Tile } from './../constants/tile'
import { getShuntsu, getToitsu, getKoutsu, getKantsu } from './mentsuUtils'
import { TileType, TileListType, TileListGroupType } from '../types/tileType'
import { MentsuType } from '../types/handType'

export class Hand {
  tiles: TileType[]
  isCloseHand: boolean
  shuntsuList: MentsuType[] = []
  toitsuList: MentsuType[] = []
  koutsuList: MentsuType[] = []
  kantsuList: MentsuType[] = []
  toitsuKantsuList: MentsuType[] = []
  koutsuKantsuList: MentsuType[] = []
  mentsuList: MentsuType[] = []
  jantou: MentsuType | null = null

  constructor(tiles: TileType[]) {
    const orderRule = Object.values(Tile)
    const groups = groupBy(tiles, 'tile')

    this.tiles = tiles
      .slice()
      .sort(
        (a: TileType, b: TileType) =>
          orderRule.indexOf(a.tile) - orderRule.indexOf(b.tile),
      )
    this.isCloseHand = tiles.findIndex(tile => tile.isOpen) >= 0
    this.shuntsuList = this.getShuntsuList(tiles)
    this.toitsuList = this.getToitsuList(groups)
    this.koutsuList = this.getKoutsuList(groups)
    this.kantsuList = this.getKantsuList(groups)
    this.toitsuKantsuList = this.toitsuList.concat(this.kantsuList)
    this.koutsuKantsuList = this.koutsuList.concat(this.kantsuList)
    this.mentsuList = this.koutsuKantsuList.concat(this.shuntsuList)

    // TODO: WIP
    if (this.toitsuList.length === 1) {
      this.jantou = this.toitsuList[0]
    }
  }

  // TODO: WIP
  private getShuntsuList(tiles: TileListType): MentsuType[] {
    const shuntsuRule = [
      [Tile.Man1, Tile.Man2, Tile.Man3],
      [Tile.Man2, Tile.Man3, Tile.Man4],
      [Tile.Man3, Tile.Man4, Tile.Man5],
      [Tile.Man4, Tile.Man5, Tile.Man6],
      [Tile.Man5, Tile.Man6, Tile.Man7],
      [Tile.Man6, Tile.Man7, Tile.Man8],
      [Tile.Man7, Tile.Man8, Tile.Man9],
      [Tile.Pin1, Tile.Pin2, Tile.Pin3],
      [Tile.Pin2, Tile.Pin3, Tile.Pin4],
      [Tile.Pin3, Tile.Pin4, Tile.Pin5],
      [Tile.Pin4, Tile.Pin5, Tile.Pin6],
      [Tile.Pin5, Tile.Pin6, Tile.Pin7],
      [Tile.Pin6, Tile.Pin7, Tile.Pin8],
      [Tile.Pin7, Tile.Pin8, Tile.Pin9],
      [Tile.Sou1, Tile.Sou2, Tile.Sou3],
      [Tile.Sou2, Tile.Sou3, Tile.Sou4],
      [Tile.Sou3, Tile.Sou4, Tile.Sou5],
      [Tile.Sou4, Tile.Sou5, Tile.Sou6],
      [Tile.Sou5, Tile.Sou6, Tile.Sou7],
      [Tile.Sou6, Tile.Sou7, Tile.Sou8],
      [Tile.Sou7, Tile.Sou8, Tile.Sou9],
    ]
    const list: MentsuType[] = []

    tiles.forEach((tile: TileType, index: number) => {
      if (
        shuntsuRule.some(
          rule =>
            rule.join() ===
            [
              tiles[index]?.tile,
              tiles[index + 1]?.tile,
              tiles[index + 2]?.tile,
            ].join(),
        )
      ) {
        list.push(
          getShuntsu([tiles[index], tiles[index + 1], tiles[index + 2]]),
        )
      }
    })

    return list
  }

  private getToitsuList(groups: TileListGroupType): MentsuType[] {
    const list: MentsuType[] = []
    Object.keys(groups).forEach(tileName => {
      if (groups[tileName].length === 2) {
        list.push(getToitsu(groups[tileName]))
      }
    })

    return list
  }

  private getKoutsuList(groups: TileListGroupType): MentsuType[] {
    const list: MentsuType[] = []
    Object.keys(groups).forEach(tileName => {
      if (groups[tileName].length === 3) {
        list.push(getKoutsu(groups[tileName]))
      }
    })

    return list
  }

  private getKantsuList(groups: TileListGroupType): MentsuType[] {
    const list: MentsuType[] = []
    Object.keys(groups).forEach(tileName => {
      if (groups[tileName].length === 4) {
        list.push(getKantsu(groups[tileName]))
      }
    })

    return list
  }
}
