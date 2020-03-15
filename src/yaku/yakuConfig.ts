import { HandConfigType } from './../types/handConfigType'
import { Hand } from './../hand/hand'
import { Yaku } from './yaku'

import { AkaDora } from './normal/akaDora'
import { Chankan } from './normal/chankan'
import { Chanta } from './normal/chanta'
import { Chiitoitsu } from './normal/chiitoitsu'
import { Chinitsu } from './normal/chinitsu'
import { Dora } from './normal/dora'
import { DoubleRiichi } from './normal/doubleRiichi'
import { Haitei } from './normal/haitei'
import { Honitsu } from './normal/honitsu'
import { Honroutou } from './normal/honroutou'
import { Houtei } from './normal/houtei'
import { Iipeikou } from './normal/iipeikou'
import { Ippatsu } from './normal/ippatsu'
import { Ittsuu } from './normal/ittsuu'
import { Junchan } from './normal/junchan'
import { Pinfu } from './normal/pinfu'
import { Riichi } from './normal/riichi'
import { Rinshan } from './normal/rinshan'
import { Ryanpeikou } from './normal/ryanpeikou'
import { SanAnkou } from './normal/sanAnkou'
import { SanKantsu } from './normal/sanKantsu'
import { Sanshoku } from './normal/sanshoku'
import { SanshokuDoukou } from './normal/sanshokuDoukou'
import { Shousangen } from './normal/shousangen'
import { Tanyao } from './normal/tanyao'
import { Toitoi } from './normal/toitoi'
import { Tsumo } from './normal/tsumo'
import { UraDora } from './normal/uraDora'
import { YakuhaiChun } from './normal/yakuhaiChun'
import { YakuhaiEast } from './normal/yakuhaiEast'
import { YakuhaiHaku } from './normal/yakuhaiHaku'
import { YakuhaiHatsu } from './normal/yakuhaiHatsu'
import { YakuhaiNorth } from './normal/yakuhaiNorth'
import { YakuhaiOfPlace } from './normal/yakuhaiOfPlace'
import { YakuhaiOfRound } from './normal/yakuhaiOfRound'
import { YakuhaiSouth } from './normal/yakuhaiSouth'
import { YakuhaiWest } from './normal/yakuhaiWest'

import { Chiihou } from './yakuman/chiihou'
import { Chinroutou } from './yakuman/chinroutou'
import { ChuurenPoutou } from './yakuman/chuurenPoutou'
import { Daisangen } from './yakuman/daisangen'
import { Daisuushii } from './yakuman/daisuushii'
import { KokushiMusou } from './yakuman/kokushiMusou'
import { Renhou } from './yakuman/renhou'
import { Ryuuiisou } from './yakuman/ryuuiisou'
import { Shousuushii } from './yakuman/shousuushii'
import { SuuAnkou } from './yakuman/suuAnkou'
import { SuuKantsu } from './yakuman/suuKantsu'
import { Tenhou } from './yakuman/tenhou'
import { Tsuuiisou } from './yakuman/tsuuiisou'

export class YakuConfig {
  akaDora: Yaku
  chankan: Yaku
  chanta: Yaku
  chiitoitsu: Yaku
  chinitsu: Yaku
  dora: Yaku
  doubleRiichi: Yaku
  haitei: Yaku
  honitsu: Yaku
  honroutou: Yaku
  houtei: Yaku
  iipeikou: Yaku
  ippatsu: Yaku
  ittsuu: Yaku
  junchan: Yaku
  pinfu: Yaku
  riichi: Yaku
  rinshan: Yaku
  ryanpeikou: Yaku
  sanAnkou: Yaku
  sanKantsu: Yaku
  sanshoku: Yaku
  sanshokuDoukou: Yaku
  shousangen: Yaku
  tanyao: Yaku
  toitoi: Yaku
  tsumo: Yaku
  uraDora: Yaku
  yakuhaiChun: Yaku
  yakuhaiEast: Yaku
  yakuhaiHaku: Yaku
  yakuhaiHatsu: Yaku
  yakuhaiNorth: Yaku
  yakuhaiOfPlace: Yaku
  yakuhaiOfRound: Yaku
  yakuhaiSouth: Yaku
  yakuhaiWest: Yaku
  chiihou: Yaku
  chinroutou: Yaku
  chuurenPoutou: Yaku
  daisangen: Yaku
  daisuushii: Yaku
  kokushiMusou: Yaku
  renhou: Yaku
  ryuuiisou: Yaku
  shousuushii: Yaku
  suuAnkou: Yaku
  suuKantsu: Yaku
  tenhou: Yaku
  tsuuiisou: Yaku

  constructor(tiles: Hand, handConfig: HandConfigType) {
    this.akaDora = new AkaDora(tiles, handConfig)
    this.chankan = new Chankan(tiles, handConfig)
    this.chanta = new Chanta(tiles, handConfig)
    this.chiitoitsu = new Chiitoitsu(tiles, handConfig)
    this.chinitsu = new Chinitsu(tiles, handConfig)
    this.dora = new Dora(tiles, handConfig)
    this.doubleRiichi = new DoubleRiichi(tiles, handConfig)
    this.haitei = new Haitei(tiles, handConfig)
    this.honitsu = new Honitsu(tiles, handConfig)
    this.honroutou = new Honroutou(tiles, handConfig)
    this.houtei = new Houtei(tiles, handConfig)
    this.iipeikou = new Iipeikou(tiles, handConfig)
    this.ippatsu = new Ippatsu(tiles, handConfig)
    this.ittsuu = new Ittsuu(tiles, handConfig)
    this.junchan = new Junchan(tiles, handConfig)
    this.pinfu = new Pinfu(tiles, handConfig)
    this.riichi = new Riichi(tiles, handConfig)
    this.rinshan = new Rinshan(tiles, handConfig)
    this.ryanpeikou = new Ryanpeikou(tiles, handConfig)
    this.sanAnkou = new SanAnkou(tiles, handConfig)
    this.sanKantsu = new SanKantsu(tiles, handConfig)
    this.sanshoku = new Sanshoku(tiles, handConfig)
    this.sanshokuDoukou = new SanshokuDoukou(tiles, handConfig)
    this.shousangen = new Shousangen(tiles, handConfig)
    this.tanyao = new Tanyao(tiles, handConfig)
    this.toitoi = new Toitoi(tiles, handConfig)
    this.tsumo = new Tsumo(tiles, handConfig)
    this.uraDora = new UraDora(tiles, handConfig)
    this.yakuhaiChun = new YakuhaiChun(tiles, handConfig)
    this.yakuhaiEast = new YakuhaiEast(tiles, handConfig)
    this.yakuhaiHaku = new YakuhaiHaku(tiles, handConfig)
    this.yakuhaiHatsu = new YakuhaiHatsu(tiles, handConfig)
    this.yakuhaiNorth = new YakuhaiNorth(tiles, handConfig)
    this.yakuhaiOfPlace = new YakuhaiOfPlace(tiles, handConfig)
    this.yakuhaiOfRound = new YakuhaiOfRound(tiles, handConfig)
    this.yakuhaiSouth = new YakuhaiSouth(tiles, handConfig)
    this.yakuhaiWest = new YakuhaiWest(tiles, handConfig)
    this.chiihou = new Chiihou(tiles, handConfig)
    this.chinroutou = new Chinroutou(tiles, handConfig)
    this.chuurenPoutou = new ChuurenPoutou(tiles, handConfig)
    this.daisangen = new Daisangen(tiles, handConfig)
    this.daisuushii = new Daisuushii(tiles, handConfig)
    this.kokushiMusou = new KokushiMusou(tiles, handConfig)
    this.renhou = new Renhou(tiles, handConfig)
    this.ryuuiisou = new Ryuuiisou(tiles, handConfig)
    this.shousuushii = new Shousuushii(tiles, handConfig)
    this.suuAnkou = new SuuAnkou(tiles, handConfig)
    this.suuKantsu = new SuuKantsu(tiles, handConfig)
    this.tenhou = new Tenhou(tiles, handConfig)
    this.tsuuiisou = new Tsuuiisou(tiles, handConfig)
  }
}
