"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hand_1 = require("./hand/hand");
var handCalculator_1 = require("./hand/handCalculator");
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
    var hand = new hand_1.Hand(tiles);
    return handCalculator_1.handCalculator(hand, handConfig);
};
exports.default = mahjongScore;
