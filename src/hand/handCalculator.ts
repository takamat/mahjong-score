import HandConfigType from '../types/handConfigType'
import { FuDetail, Result } from '../types/resultType'
import Hand from './../hand/hand'
import YakuConfig from '../yaku/yakuConfig'

const handCalculator = (hand: Hand, handConfig: HandConfigType): Result => {
  const config = new YakuConfig(hand, handConfig)
  const score = { han: 0, fu: 0, points: 0 }
  const handYaku: string[] = []
  const fuDetails: FuDetail[] = []

  // if (tiles.length !== 14) {
  //   console.error('Incorrect number of tiles')
  //   return { score: null, yaku: null, fuDetails: null }
  // }

  const winTileNumber = hand.tiles.filter(tile => tile.isWinTile).length
  if (winTileNumber !== 1) {
    console.error('No win tile specified')
  }

  // if (config.akaDora.isConditionMet()) {
  //   handYaku.push(config.akaDora.name)
  //   score.han += config.akaDora.getHan()
  // }

  if (config.yakuhaiChun.isConditionMet()) {
    handYaku.push(config.yakuhaiChun.name)
    score.han += config.yakuhaiChun.getHan()
  }

  return { score, yaku: handYaku, fuDetails }
}

export default handCalculator
