"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var akaDora_1 = __importDefault(require("./normal/akaDora"));
var chankan_1 = __importDefault(require("./normal/chankan"));
var chanta_1 = __importDefault(require("./normal/chanta"));
var chiitoitsu_1 = __importDefault(require("./normal/chiitoitsu"));
var chinitsu_1 = __importDefault(require("./normal/chinitsu"));
var dora_1 = __importDefault(require("./normal/dora"));
var doubleRiichi_1 = __importDefault(require("./normal/doubleRiichi"));
var haitei_1 = __importDefault(require("./normal/haitei"));
var honitsu_1 = __importDefault(require("./normal/honitsu"));
var honroutou_1 = __importDefault(require("./normal/honroutou"));
var houtei_1 = __importDefault(require("./normal/houtei"));
var iipeikou_1 = __importDefault(require("./normal/iipeikou"));
var ippatsu_1 = __importDefault(require("./normal/ippatsu"));
var ittsuu_1 = __importDefault(require("./normal/ittsuu"));
var junchan_1 = __importDefault(require("./normal/junchan"));
var pinfu_1 = __importDefault(require("./normal/pinfu"));
var riichi_1 = __importDefault(require("./normal/riichi"));
var rinshan_1 = __importDefault(require("./normal/rinshan"));
var ryanpeikou_1 = __importDefault(require("./normal/ryanpeikou"));
var sanAnkou_1 = __importDefault(require("./normal/sanAnkou"));
var sanKantsu_1 = __importDefault(require("./normal/sanKantsu"));
var sanshoku_1 = __importDefault(require("./normal/sanshoku"));
var sanshokuDoukou_1 = __importDefault(require("./normal/sanshokuDoukou"));
var shousangen_1 = __importDefault(require("./normal/shousangen"));
var tanyao_1 = __importDefault(require("./normal/tanyao"));
var toitoi_1 = __importDefault(require("./normal/toitoi"));
var tsumo_1 = __importDefault(require("./normal/tsumo"));
var uraDora_1 = __importDefault(require("./normal/uraDora"));
var yakuhaiChun_1 = __importDefault(require("./normal/yakuhaiChun"));
var yakuhaiEast_1 = __importDefault(require("./normal/yakuhaiEast"));
var yakuhaiHaku_1 = __importDefault(require("./normal/yakuhaiHaku"));
var yakuhaiHatsu_1 = __importDefault(require("./normal/yakuhaiHatsu"));
var yakuhaiNorth_1 = __importDefault(require("./normal/yakuhaiNorth"));
var yakuhaiOfPlace_1 = __importDefault(require("./normal/yakuhaiOfPlace"));
var yakuhaiOfRound_1 = __importDefault(require("./normal/yakuhaiOfRound"));
var yakuhaiSouth_1 = __importDefault(require("./normal/yakuhaiSouth"));
var yakuhaiWest_1 = __importDefault(require("./normal/yakuhaiWest"));
var chiihou_1 = __importDefault(require("./yakuman/chiihou"));
var chinroutou_1 = __importDefault(require("./yakuman/chinroutou"));
var chuurenPoutou_1 = __importDefault(require("./yakuman/chuurenPoutou"));
var daisangen_1 = __importDefault(require("./yakuman/daisangen"));
var daisuushii_1 = __importDefault(require("./yakuman/daisuushii"));
var kokushiMusou_1 = __importDefault(require("./yakuman/kokushiMusou"));
var renhou_1 = __importDefault(require("./yakuman/renhou"));
var ryuuiisou_1 = __importDefault(require("./yakuman/ryuuiisou"));
var shousuushii_1 = __importDefault(require("./yakuman/shousuushii"));
var suuAnkou_1 = __importDefault(require("./yakuman/suuAnkou"));
var suuKantsu_1 = __importDefault(require("./yakuman/suuKantsu"));
var tenhou_1 = __importDefault(require("./yakuman/tenhou"));
var tsuuiisou_1 = __importDefault(require("./yakuman/tsuuiisou"));
var YakuConfig = /** @class */ (function () {
    function YakuConfig(tiles, handConfig) {
        this.akaDora = new akaDora_1.default(tiles, handConfig);
        this.chankan = new chankan_1.default(tiles, handConfig);
        this.chanta = new chanta_1.default(tiles, handConfig);
        this.Chiitoitsu = new chiitoitsu_1.default(tiles, handConfig);
        this.chinitsu = new chinitsu_1.default(tiles, handConfig);
        this.dora = new dora_1.default(tiles, handConfig);
        this.doubleRiichi = new doubleRiichi_1.default(tiles, handConfig);
        this.haitei = new haitei_1.default(tiles, handConfig);
        this.honitsu = new honitsu_1.default(tiles, handConfig);
        this.honroutou = new honroutou_1.default(tiles, handConfig);
        this.houtei = new houtei_1.default(tiles, handConfig);
        this.iipeikou = new iipeikou_1.default(tiles, handConfig);
        this.ippatsu = new ippatsu_1.default(tiles, handConfig);
        this.ittsuu = new ittsuu_1.default(tiles, handConfig);
        this.junchan = new junchan_1.default(tiles, handConfig);
        this.pinfu = new pinfu_1.default(tiles, handConfig);
        this.riichi = new riichi_1.default(tiles, handConfig);
        this.rinshan = new rinshan_1.default(tiles, handConfig);
        this.ryanpeikou = new ryanpeikou_1.default(tiles, handConfig);
        this.sanAnkou = new sanAnkou_1.default(tiles, handConfig);
        this.sanKantsu = new sanKantsu_1.default(tiles, handConfig);
        this.sanshoku = new sanshoku_1.default(tiles, handConfig);
        this.sanshokuDoukou = new sanshokuDoukou_1.default(tiles, handConfig);
        this.shousangen = new shousangen_1.default(tiles, handConfig);
        this.tanyao = new tanyao_1.default(tiles, handConfig);
        this.toitoi = new toitoi_1.default(tiles, handConfig);
        this.tsumo = new tsumo_1.default(tiles, handConfig);
        this.uraDora = new uraDora_1.default(tiles, handConfig);
        this.yakuhaiChun = new yakuhaiChun_1.default(tiles, handConfig);
        this.yakuhaiEast = new yakuhaiEast_1.default(tiles, handConfig);
        this.yakuhaiHaku = new yakuhaiHaku_1.default(tiles, handConfig);
        this.yakuhaiHatsu = new yakuhaiHatsu_1.default(tiles, handConfig);
        this.yakuhaiNorth = new yakuhaiNorth_1.default(tiles, handConfig);
        this.yakuhaiOfPlace = new yakuhaiOfPlace_1.default(tiles, handConfig);
        this.yakuhaiOfRound = new yakuhaiOfRound_1.default(tiles, handConfig);
        this.yakuhaiSouth = new yakuhaiSouth_1.default(tiles, handConfig);
        this.yakuhaiWest = new yakuhaiWest_1.default(tiles, handConfig);
        this.chiihou = new chiihou_1.default(tiles, handConfig);
        this.chinroutou = new chinroutou_1.default(tiles, handConfig);
        this.chuurenPoutou = new chuurenPoutou_1.default(tiles, handConfig);
        this.daisangen = new daisangen_1.default(tiles, handConfig);
        this.daisuushii = new daisuushii_1.default(tiles, handConfig);
        this.kokushiMusou = new kokushiMusou_1.default(tiles, handConfig);
        this.renhou = new renhou_1.default(tiles, handConfig);
        this.ryuuiisou = new ryuuiisou_1.default(tiles, handConfig);
        this.shousuushii = new shousuushii_1.default(tiles, handConfig);
        this.suuAnkou = new suuAnkou_1.default(tiles, handConfig);
        this.suuKantsu = new suuKantsu_1.default(tiles, handConfig);
        this.tenhou = new tenhou_1.default(tiles, handConfig);
        this.tsuuiisou = new tsuuiisou_1.default(tiles, handConfig);
    }
    return YakuConfig;
}());
exports.default = YakuConfig;