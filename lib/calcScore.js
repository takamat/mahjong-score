"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcScore = function (yakuList, handConfig) {
    var score = { han: 0, fu: 0, points: 0 };
    var yaku = yakuList.map(function (yaku) { return yaku.name; });
    var fuDetails = [];
    return { score: score, yaku: yaku, fuDetails: fuDetails };
};
