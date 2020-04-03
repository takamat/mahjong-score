import { Tile } from '../constants/tile'
import { HandConfigType } from '../types/handType'
import { FuDetail, Result } from '../types/resultType'
import { Hand } from './../hand/hand'
import { YakuConfig } from '../yaku/yakuConfig'

export const handCalculator = (
  hand: Hand,
  handConfig: HandConfigType,
): Result => {
  const config = new YakuConfig(hand, handConfig)
  const score = { han: 0, fu: 0, points: 0 }
  const handYaku: string[] = []
  const fuDetails: FuDetail[] = []

  // invalid parameter
  const kazehaiList = [Tile.Ton, Tile.Nan, Tile.Sha, Tile.Pei]
  if (!kazehaiList.includes(handConfig.baKaze)) {
    console.error('Bakaze is unspecified')
  }

  if (!kazehaiList.includes(handConfig.jiKaze)) {
    console.error('JiKaze is unspecified')
  }

  const winTileNumber = hand.tiles.filter(tile => tile.isWinTile).length
  if (winTileNumber !== 1) {
    console.error('Win tile is unspecified')
  }

  // yaku
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

  // TODO: WIP
  if (config.chiitoitsu.isConditionMet()) {
    handYaku.push(config.chiitoitsu.name)
    score.han += config.chiitoitsu.getHan()
  }

  if (config.tanyao.isConditionMet()) {
    handYaku.push(config.tanyao.name)
    score.han += config.tanyao.getHan()
  }

  if (config.pinfu.isConditionMet()) {
    handYaku.push(config.pinfu.name)
    score.han += config.pinfu.getHan()
  }

  if (config.iipeikou.isConditionMet()) {
    handYaku.push(config.iipeikou.name)
    score.han += config.iipeikou.getHan()
  }

  if (config.toitoi.isConditionMet()) {
    handYaku.push(config.toitoi.name)
    score.han += config.toitoi.getHan()
  }

  if (config.sanAnkou.isConditionMet()) {
    handYaku.push(config.sanAnkou.name)
    score.han += config.sanAnkou.getHan()
  }

  if (config.sanshokuDoukou.isConditionMet()) {
    handYaku.push(config.sanshokuDoukou.name)
    score.han += config.sanshokuDoukou.getHan()
  }

  if (config.sanshoku.isConditionMet()) {
    handYaku.push(config.sanshoku.name)
    score.han += config.sanshoku.getHan()
  }

  if (config.honroutou.isConditionMet()) {
    handYaku.push(config.honroutou.name)
    score.han += config.honroutou.getHan()
  }

  if (config.ittsuu.isConditionMet()) {
    handYaku.push(config.ittsuu.name)
    score.han += config.ittsuu.getHan()
  }

  if (config.chanta.isConditionMet()) {
    handYaku.push(config.chanta.name)
    score.han += config.chanta.getHan()
  }

  if (config.shousangen.isConditionMet()) {
    handYaku.push(config.shousangen.name)
    score.han += config.shousangen.getHan()
  }

  if (config.sanKantsu.isConditionMet()) {
    handYaku.push(config.sanKantsu.name)
    score.han += config.sanKantsu.getHan()
  }

  if (config.honitsu.isConditionMet()) {
    handYaku.push(config.honitsu.name)
    score.han += config.honitsu.getHan()
  }

  if (config.junchan.isConditionMet()) {
    handYaku.push(config.junchan.name)
    score.han += config.junchan.getHan()
  }

  if (config.ryanpeikou.isConditionMet()) {
    handYaku.push(config.ryanpeikou.name)
    score.han += config.ryanpeikou.getHan()
  }

  if (config.chinitsu.isConditionMet()) {
    handYaku.push(config.chinitsu.name)
    score.han += config.chinitsu.getHan()
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
