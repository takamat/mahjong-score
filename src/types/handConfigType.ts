import Tile from './../constants/tile'

interface HandConfigType {
  winTile: Tile
  doraNumber: number
  akaDoraNumber: number
  uraDoraNumber: number
  baKaze: Tile
  jiKaze: Tile
  isCloseHand: boolean
  isTsumo: boolean
  isRiichi: boolean
  isDoubleRiichi: boolean
  isIppatsu: boolean
  isChankan: boolean
  isRinshankaihoh: boolean
}

export default HandConfigType
