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

  if (config.riichi.isConditionMet()) {
    handYaku.push(config.riichi.name)
    score.han += config.riichi.getHan()
  }

  if (config.doubleRiichi.isConditionMet()) {
    handYaku.push(config.doubleRiichi.name)
    score.han += config.doubleRiichi.getHan()
  }

  if (config.ippatsu.isConditionMet()) {
    handYaku.push(config.ippatsu.name)
    score.han += config.ippatsu.getHan()
  }

  if (config.tsumo.isConditionMet()) {
    handYaku.push(config.tsumo.name)
    score.han += config.tsumo.getHan()
  }

  if (config.chankan.isConditionMet()) {
    handYaku.push(config.chankan.name)
    score.han += config.chankan.getHan()
  }

  if (config.rinshan.isConditionMet()) {
    handYaku.push(config.rinshan.name)
    score.han += config.rinshan.getHan()
  }

  if (config.haitei.isConditionMet()) {
    handYaku.push(config.haitei.name)
    score.han += config.haitei.getHan()
  }

  if (config.houtei.isConditionMet()) {
    handYaku.push(config.houtei.name)
    score.han += config.houtei.getHan()
  }

  if (config.dora.isConditionMet()) {
    handYaku.push(config.dora.name)
    score.han += config.dora.getHan()
  }

  if (config.akaDora.isConditionMet()) {
    handYaku.push(config.akaDora.name)
    score.han += config.akaDora.getHan()
  }

  if (config.uraDora.isConditionMet()) {
    handYaku.push(config.uraDora.name)
    score.han += config.uraDora.getHan()
  }

  if (config.yakuhaiOfPlace.isConditionMet()) {
    handYaku.push(config.yakuhaiOfPlace.name)
    score.han += config.yakuhaiOfPlace.getHan()
  }

  if (config.yakuhaiOfRound.isConditionMet()) {
    handYaku.push(config.yakuhaiOfRound.name)
    score.han += config.yakuhaiOfRound.getHan()
  }

  if (config.yakuhaiEast.isConditionMet()) {
    handYaku.push(config.yakuhaiEast.name)
    score.han += config.yakuhaiEast.getHan()
  }

  if (config.yakuhaiSouth.isConditionMet()) {
    handYaku.push(config.yakuhaiSouth.name)
    score.han += config.yakuhaiSouth.getHan()
  }

  if (config.yakuhaiWest.isConditionMet()) {
    handYaku.push(config.yakuhaiWest.name)
    score.han += config.yakuhaiWest.getHan()
  }

  if (config.yakuhaiNorth.isConditionMet()) {
    handYaku.push(config.yakuhaiNorth.name)
    score.han += config.yakuhaiNorth.getHan()
  }

  if (config.yakuhaiHaku.isConditionMet()) {
    handYaku.push(config.yakuhaiHaku.name)
    score.han += config.yakuhaiHaku.getHan()
  }

  if (config.yakuhaiHatsu.isConditionMet()) {
    handYaku.push(config.yakuhaiHatsu.name)
    score.han += config.yakuhaiHatsu.getHan()
  }

  if (config.yakuhaiChun.isConditionMet()) {
    handYaku.push(config.yakuhaiChun.name)
    score.han += config.yakuhaiChun.getHan()
  }

  return { score, yaku: handYaku, fuDetails }
}

export default handCalculator
