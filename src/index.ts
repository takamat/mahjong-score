import Tile from './constants/tile'
import handCalculator from './handCalculator'

const tiles = {
  man: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  pin: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  sou: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  kaze: [0, 0, 0, 0],
  sangen: [0, 0, 0],
}

const handConfig = {
  winTile: Tile.Chun,
  doraNumber: 0,
  akaDoraNumber: 0,
  uraDoraNumber: 0,
  baKaze: Tile.Ton,
  jiKaze: Tile.Nan,
  isCloseHand: true,
  isTsumo: true,
  isRiichi: true,
  isDoubleRiichi: false,
  isIppatsu: true,
  isChankan: false,
  isRinshankaihoh: false,
}

// const ruleConfig = {}

const result = handCalculator(tiles, handConfig)

console.log('score', result.score)
console.log('yaku', result.yaku)
console.log('fu', result.fuDetails)
