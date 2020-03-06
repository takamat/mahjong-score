"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tile_1 = __importDefault(require("./constants/tile"));
var hand_1 = __importDefault(require("./hand/hand"));
var handCalculator_1 = __importDefault(require("./hand/handCalculator"));
var tiles = [
    { tile: tile_1.default.Man1 },
    { tile: tile_1.default.Man1 },
    { tile: tile_1.default.Man1 },
    { tile: tile_1.default.Man4 },
    { tile: tile_1.default.Man5 },
    { tile: tile_1.default.Man6 },
    { tile: tile_1.default.Pin7 },
    { tile: tile_1.default.Pin7 },
    { tile: tile_1.default.Pin7, isOpen: true },
    { tile: tile_1.default.Sou1 },
    { tile: tile_1.default.Sou1 },
    { tile: tile_1.default.Chun },
    { tile: tile_1.default.Chun, isWinTile: true },
    { tile: tile_1.default.Chun },
    { tile: tile_1.default.Chun },
];
var handConfig = {
    doraNumber: 1,
    akaDoraNumber: 0,
    uraDoraNumber: 0,
    baKaze: tile_1.default.Ton,
    jiKaze: tile_1.default.Nan,
    isTsumo: true,
    isRiichi: true,
    isDoubleRiichi: false,
    isIppatsu: true,
    isChankan: false,
    isRinshankaihoh: false,
    isHaitei: false,
    isHoutei: false,
};
// const ruleConfig = {}
var hand = new hand_1.default(tiles);
var result = handCalculator_1.default(hand, handConfig);
console.log('score', result.score);
console.log('yaku', result.yaku);
console.log('fu', result.fuDetails);
