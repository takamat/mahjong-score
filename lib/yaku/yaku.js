"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Yaku = (function () {
    function Yaku(hand, handConfig) {
        this.hand = hand;
        this.handConfig = handConfig;
    }
    Yaku.prototype.getHan = function () {
        var han = this.hand.isCloseHand ? this.hanClose : this.hanOpen;
        return han !== null && han !== void 0 ? han : 0;
    };
    return Yaku;
}());
exports.Yaku = Yaku;
