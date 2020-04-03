import { Tile } from '../constants/tile'
import { Suit } from './../constants/suit'

export type HandConfigType = {
  doraNumber: number
  akaDoraNumber: number
  uraDoraNumber: number
  baKaze: Tile
  jiKaze: Tile
  isTsumo: boolean
  isRiichi: boolean
  isDoubleRiichi: boolean
  isIppatsu: boolean
  isChankan: boolean
  isRinshankaihoh: boolean
  isHaitei: boolean
  isHoutei: boolean
}

export type MentsuType = {
  tile?: Tile
  suit: Suit
  number: number | null
  isOpen: boolean
}
