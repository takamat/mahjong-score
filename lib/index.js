"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
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
    var sortedTiles = utils_1.sortTiles(tiles);
    var juntouCandidates = utils_1.chooseJuntouCandidates(sortedTiles);
    var hand = new hand_1.Hand(sortedTiles, juntouCandidates[0]);
    var yakuList = judgeYaku_1.judgeYaku(hand, handConfig);
    return calcScore_1.calcScore(yakuList, handConfig);
};
exports.default = mahjongScore;
