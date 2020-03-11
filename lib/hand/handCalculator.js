"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tile_1 = __importDefault(require("../constants/tile"));
var yakuConfig_1 = __importDefault(require("../yaku/yakuConfig"));
var handCalculator = function (hand, handConfig) {
    var config = new yakuConfig_1.default(hand, handConfig);
    var score = { han: 0, fu: 0, points: 0 };
    var handYaku = [];
    var fuDetails = [];
    var kazehaiList = [tile_1.default.Ton, tile_1.default.Nan, tile_1.default.Sha, tile_1.default.Pei];
    if (!kazehaiList.includes(handConfig.baKaze)) {
        console.error('Bakaze is unspecified');
    }
    if (!kazehaiList.includes(handConfig.jiKaze)) {
        console.error('JiKaze is unspecified');
    }
    var winTileNumber = hand.tiles.filter(function (tile) { return tile.isWinTile; }).length;
    if (winTileNumber !== 1) {
        console.error('Win tile is unspecified');
    }
    if (config.riichi.isConditionMet()) {
        handYaku.push(config.riichi.name);
        score.han += config.riichi.getHan();
    }
    if (config.doubleRiichi.isConditionMet()) {
        handYaku.push(config.doubleRiichi.name);
        score.han += config.doubleRiichi.getHan();
    }
    if (config.ippatsu.isConditionMet()) {
        handYaku.push(config.ippatsu.name);
        score.han += config.ippatsu.getHan();
    }
    if (config.tsumo.isConditionMet()) {
        handYaku.push(config.tsumo.name);
        score.han += config.tsumo.getHan();
    }
    if (config.chankan.isConditionMet()) {
        handYaku.push(config.chankan.name);
        score.han += config.chankan.getHan();
    }
    if (config.rinshan.isConditionMet()) {
        handYaku.push(config.rinshan.name);
        score.han += config.rinshan.getHan();
    }
    if (config.haitei.isConditionMet()) {
        handYaku.push(config.haitei.name);
        score.han += config.haitei.getHan();
    }
    if (config.houtei.isConditionMet()) {
        handYaku.push(config.houtei.name);
        score.han += config.houtei.getHan();
    }
    if (config.chiitoitsu.isConditionMet()) {
        handYaku.push(config.chiitoitsu.name);
        score.han += config.chiitoitsu.getHan();
    }
    if (config.dora.isConditionMet()) {
        handYaku.push(config.dora.name);
        score.han += config.dora.getHan();
    }
    if (config.akaDora.isConditionMet()) {
        handYaku.push(config.akaDora.name);
        score.han += config.akaDora.getHan();
    }
    if (config.uraDora.isConditionMet()) {
        handYaku.push(config.uraDora.name);
        score.han += config.uraDora.getHan();
    }
    if (config.yakuhaiOfPlace.isConditionMet()) {
        handYaku.push(config.yakuhaiOfPlace.name);
        score.han += config.yakuhaiOfPlace.getHan();
    }
    if (config.yakuhaiOfRound.isConditionMet()) {
        handYaku.push(config.yakuhaiOfRound.name);
        score.han += config.yakuhaiOfRound.getHan();
    }
    if (config.yakuhaiEast.isConditionMet()) {
        handYaku.push(config.yakuhaiEast.name);
        score.han += config.yakuhaiEast.getHan();
    }
    if (config.yakuhaiSouth.isConditionMet()) {
        handYaku.push(config.yakuhaiSouth.name);
        score.han += config.yakuhaiSouth.getHan();
    }
    if (config.yakuhaiWest.isConditionMet()) {
        handYaku.push(config.yakuhaiWest.name);
        score.han += config.yakuhaiWest.getHan();
    }
    if (config.yakuhaiNorth.isConditionMet()) {
        handYaku.push(config.yakuhaiNorth.name);
        score.han += config.yakuhaiNorth.getHan();
    }
    if (config.yakuhaiHaku.isConditionMet()) {
        handYaku.push(config.yakuhaiHaku.name);
        score.han += config.yakuhaiHaku.getHan();
    }
    if (config.yakuhaiHatsu.isConditionMet()) {
        handYaku.push(config.yakuhaiHatsu.name);
        score.han += config.yakuhaiHatsu.getHan();
    }
    if (config.yakuhaiChun.isConditionMet()) {
        handYaku.push(config.yakuhaiChun.name);
        score.han += config.yakuhaiChun.getHan();
    }
    return { score: score, yaku: handYaku, fuDetails: fuDetails };
};
exports.default = handCalculator;
