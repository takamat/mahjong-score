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
    // if (config.akaDora.isConditionMet()) {
    //   handYaku.push(config.akaDora.name)
    //   score.han += config.akaDora.getHan()
    // }
    if (config.yakuhaiChun.isConditionMet()) {
        handYaku.push(config.yakuhaiChun.name);
        score.han += config.yakuhaiChun.getHan();
    }
    return { score: score, yaku: handYaku, fuDetails: fuDetails };
};
exports.default = handCalculator;
