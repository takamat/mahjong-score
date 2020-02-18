"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tile_1 = __importDefault(require("./constants/tile"));
var handCalculator_1 = __importDefault(require("./handCalculator"));
var tiles = {
    man: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    pin: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    sou: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    kaze: [0, 0, 0, 0],
    sangen: [0, 0, 0],
};
var handConfig = {
    winTile: tile_1.default.Chun,
    doraNumber: 0,
    akaDoraNumber: 0,
    uraDoraNumber: 0,
    baKaze: tile_1.default.Ton,
    jiKaze: tile_1.default.Nan,
    isCloseHand: true,
    isTsumo: true,
    isRiichi: true,
    isDoubleRiichi: false,
    isIppatsu: true,
    isChankan: false,
    isRinshankaihoh: false,
};
// const ruleConfig = {}
var result = handCalculator_1.default(tiles, handConfig);
console.log('score', result.score);
console.log('yaku', result.yaku);
console.log('fu', result.fuDetails);
