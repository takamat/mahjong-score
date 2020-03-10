"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hand_1 = __importDefault(require("./hand/hand"));
var handCalculator_1 = __importDefault(require("./hand/handCalculator"));
var mahjongScore = function (tiles, handOptions) {
    var handConfig = Object.assign({
        doraNumber: 0,
        akaDoraNumber: 0,
        uraDoraNumber: 0,
        isTsumo: false,
        isRiichi: false,
        isDoubleRiichi: false,
        isIppatsu: false,
        isChankan: false,
        isRinshankaihoh: false,
        isHaitei: false,
        isHoutei: false,
    }, handOptions);
    var hand = new hand_1.default(tiles);
    return handCalculator_1.default(hand, handConfig);
};
exports.default = mahjongScore;
