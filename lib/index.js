"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hand_1 = require("./hand/hand");
var judgeYaku_1 = require("./yaku/judgeYaku");
var calcScore_1 = require("./calcScore");
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
    var yakuList = judgeYaku_1.judgeYaku(hand, handConfig);
    return calcScore_1.calcScore(yakuList, handConfig);
};
exports.default = mahjongScore;
