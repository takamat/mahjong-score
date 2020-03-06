"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yakuConfig_1 = __importDefault(require("../yaku/yakuConfig"));
var handCalculator = function (hand, handConfig) {
    var config = new yakuConfig_1.default(hand, handConfig);
    var score = { han: 0, fu: 0, points: 0 };
    var handYaku = [];
    var fuDetails = [];
    // if (tiles.length !== 14) {
    //   console.error('Incorrect number of tiles')
    //   return { score: null, yaku: null, fuDetails: null }
    // }
    var winTileNumber = hand.tiles.filter(function (tile) { return tile.isWinTile; }).length;
    if (winTileNumber !== 1) {
        console.error('No win tile specified');
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
