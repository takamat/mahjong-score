"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yakuConfig_1 = __importDefault(require("./yaku/yakuConfig"));
var handCalculator = function (tiles, handConfig) {
    var config = new yakuConfig_1.default(tiles, handConfig);
    var score = { han: 0, fu: 0, points: 0 };
    var handYaku = [];
    var fuDetails = [];
    // if (!isAgari) {
    //   return { error: '' }
    // }
    if (config.akaDora.isConditionMet()) {
        handYaku.push(config.akaDora.name);
        score.han += config.akaDora.getHan();
    }
    return { score: score, yaku: handYaku, fuDetails: fuDetails };
};
exports.default = handCalculator;
