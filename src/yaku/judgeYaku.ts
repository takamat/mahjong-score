import { Tile } from '../constants/tile'
import { HandConfigType } from '../types/handType'
import { YakuType } from '../types/yakuType'
import { Hand } from './../hand/hand'
import { YakuConfig } from '../yaku/yakuConfig'

export const judgeYaku = (
  hand: Hand,
  handConfig: HandConfigType,
): YakuType[] => {
  const config = new YakuConfig(hand, handConfig)
  const yakuList: YakuType[] = []

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
    yakuList.push(config.riichi.getYakuData())
  }

  if (config.doubleRiichi.isConditionMet()) {
    yakuList.push(config.doubleRiichi.getYakuData())
  }

  if (config.ippatsu.isConditionMet()) {
    yakuList.push(config.ippatsu.getYakuData())
  }

  if (config.tsumo.isConditionMet()) {
    yakuList.push(config.tsumo.getYakuData())
  }

  if (config.chankan.isConditionMet()) {
    yakuList.push(config.chankan.getYakuData())
  }

  if (config.rinshan.isConditionMet()) {
    yakuList.push(config.rinshan.getYakuData())
  }

  if (config.haitei.isConditionMet()) {
    yakuList.push(config.haitei.getYakuData())
  }

  if (config.houtei.isConditionMet()) {
    yakuList.push(config.houtei.getYakuData())
  }

  // TODO: WIP
  if (config.chiitoitsu.isConditionMet()) {
    yakuList.push(config.chiitoitsu.getYakuData())
  }

  if (config.tanyao.isConditionMet()) {
    yakuList.push(config.tanyao.getYakuData())
  }

  if (config.pinfu.isConditionMet()) {
    yakuList.push(config.pinfu.getYakuData())
  }

  if (config.iipeikou.isConditionMet()) {
    yakuList.push(config.iipeikou.getYakuData())
  }

  if (config.toitoi.isConditionMet()) {
    yakuList.push(config.toitoi.getYakuData())
  }

  if (config.sanAnkou.isConditionMet()) {
    yakuList.push(config.sanAnkou.getYakuData())
  }

  if (config.sanshokuDoukou.isConditionMet()) {
    yakuList.push(config.sanshokuDoukou.getYakuData())
  }

  if (config.sanshoku.isConditionMet()) {
    yakuList.push(config.sanshoku.getYakuData())
  }

  if (config.honroutou.isConditionMet()) {
    yakuList.push(config.honroutou.getYakuData())
  }

  if (config.ittsuu.isConditionMet()) {
    yakuList.push(config.ittsuu.getYakuData())
  }

  if (config.chanta.isConditionMet()) {
    yakuList.push(config.chanta.getYakuData())
  }

  if (config.shousangen.isConditionMet()) {
    yakuList.push(config.shousangen.getYakuData())
  }

  if (config.sanKantsu.isConditionMet()) {
    yakuList.push(config.sanKantsu.getYakuData())
  }

  if (config.honitsu.isConditionMet()) {
    yakuList.push(config.honitsu.getYakuData())
  }

  if (config.junchan.isConditionMet()) {
    yakuList.push(config.junchan.getYakuData())
  }

  if (config.ryanpeikou.isConditionMet()) {
    yakuList.push(config.ryanpeikou.getYakuData())
  }

  if (config.chinitsu.isConditionMet()) {
    yakuList.push(config.doubleRiichi.getYakuData())
  }

  if (config.dora.isConditionMet()) {
    yakuList.push(config.dora.getYakuData())
  }

  if (config.akaDora.isConditionMet()) {
    yakuList.push(config.akaDora.getYakuData())
  }

  if (config.uraDora.isConditionMet()) {
    yakuList.push(config.uraDora.getYakuData())
  }

  if (config.yakuhaiOfPlace.isConditionMet()) {
    yakuList.push(config.yakuhaiOfPlace.getYakuData())
  }

  if (config.yakuhaiOfRound.isConditionMet()) {
    yakuList.push(config.yakuhaiOfRound.getYakuData())
  }

  if (config.yakuhaiEast.isConditionMet()) {
    yakuList.push(config.yakuhaiEast.getYakuData())
  }

  if (config.yakuhaiSouth.isConditionMet()) {
    yakuList.push(config.yakuhaiSouth.getYakuData())
  }

  if (config.yakuhaiWest.isConditionMet()) {
    yakuList.push(config.yakuhaiWest.getYakuData())
  }

  if (config.yakuhaiNorth.isConditionMet()) {
    yakuList.push(config.yakuhaiNorth.getYakuData())
  }

  if (config.yakuhaiHaku.isConditionMet()) {
    yakuList.push(config.yakuhaiHaku.getYakuData())
  }

  if (config.yakuhaiHatsu.isConditionMet()) {
    yakuList.push(config.yakuhaiHatsu.getYakuData())
  }

  if (config.yakuhaiChun.isConditionMet()) {
    yakuList.push(config.yakuhaiChun.getYakuData())
  }

  return yakuList
}
