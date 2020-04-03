import { Tile } from './../constants/tile'
import { Suit } from './../constants/suit'
import { TileListType } from '../types/tileType'
import { MentsuType } from '../types/handType'

const getSuit = (tile: Tile): Suit => {
  if (
    tile === Tile.Man1 ||
    tile === Tile.Man2 ||
    tile === Tile.Man3 ||
    tile === Tile.Man4 ||
    tile === Tile.Man5 ||
    tile === Tile.Man6 ||
    tile === Tile.Man7 ||
    tile === Tile.Man8 ||
    tile === Tile.Man9
  ) {
    return Suit.Man
  } else if (
    tile === Tile.Pin1 ||
    tile === Tile.Pin2 ||
    tile === Tile.Pin3 ||
    tile === Tile.Pin4 ||
    tile === Tile.Pin5 ||
    tile === Tile.Pin6 ||
    tile === Tile.Pin7 ||
    tile === Tile.Pin8 ||
    tile === Tile.Pin9
  ) {
    return Suit.Pin
  } else if (
    tile === Tile.Sou1 ||
    tile === Tile.Sou2 ||
    tile === Tile.Sou3 ||
    tile === Tile.Sou4 ||
    tile === Tile.Sou5 ||
    tile === Tile.Sou6 ||
    tile === Tile.Sou7 ||
    tile === Tile.Sou8 ||
    tile === Tile.Sou9
  ) {
    return Suit.Sou
  } else if (
    tile === Tile.Ton ||
    tile === Tile.Nan ||
    tile === Tile.Sha ||
    tile === Tile.Pei
  ) {
    return Suit.Kazehai
  } else {
    return Suit.Sangenpai
  }
}

const getTileNumber = (tile: Tile): number | null => {
  const suit = getSuit(tile)
  if (suit === Suit.Man || suit === Suit.Pin || suit === Suit.Sou) {
    return parseInt(tile.charAt(3), 10)
  }
  return null
}

export const getShuntsu = (shuntsuTiles: TileListType): MentsuType => {
  return {
    suit: getSuit(shuntsuTiles[1].tile),
    number: getTileNumber(shuntsuTiles[1].tile),
    isOpen: shuntsuTiles.findIndex(tile => tile.isOpen) >= 0,
  }
}

export const getToitsu = (toitsuTiles: TileListType): MentsuType => {
  return {
    tile: toitsuTiles[0].tile,
    suit: getSuit(toitsuTiles[0].tile),
    number: getTileNumber(toitsuTiles[0].tile),
    isOpen: false,
  }
}

export const getKoutsu = (koutsuTiles: TileListType): MentsuType => {
  return {
    tile: koutsuTiles[0].tile,
    suit: getSuit(koutsuTiles[0].tile),
    number: getTileNumber(koutsuTiles[0].tile),
    isOpen: koutsuTiles.findIndex(tile => tile.isOpen) >= 0,
  }
}

export const getKantsu = getKoutsu
