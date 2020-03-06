import Tile from './constants/tile'
import Hand from './hand/hand'
import handCalculator from './hand/handCalculator'

const tiles = [
  { tile: Tile.Man1 },
  { tile: Tile.Man1 },
  { tile: Tile.Man1 },
  { tile: Tile.Man4 },
  { tile: Tile.Man5 },
  { tile: Tile.Man6 },
  { tile: Tile.Pin7 },
  { tile: Tile.Pin7 },
  { tile: Tile.Pin7, isOpen: true },
  { tile: Tile.Sou1 },
  { tile: Tile.Sou1 },
  { tile: Tile.Chun },
  { tile: Tile.Chun, isWinTile: true },
  { tile: Tile.Chun },
  { tile: Tile.Chun },
]

const handConfig = {
  doraNumber: 1,
  akaDoraNumber: 0,
  uraDoraNumber: 0,
  baKaze: Tile.Ton,
  jiKaze: Tile.Nan,
  isTsumo: true,
  isRiichi: true,
  isDoubleRiichi: false,
  isIppatsu: true,
  isChankan: false,
  isRinshankaihoh: false,
  isHaitei: false,
  isHoutei: false,
}

// const ruleConfig = {}

const hand = new Hand(tiles)
const result = handCalculator(hand, handConfig)

console.log('score', result.score)
console.log('yaku', result.yaku)
console.log('fu', result.fuDetails)
