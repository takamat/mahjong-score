"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Yaku = /** @class */ (function () {
    function Yaku(tiles, handConfig) {
        this.tiles = tiles;
        this.handConfig = handConfig;
    }
    Yaku.prototype.getHan = function () {
        var han = this.handConfig.isCloseHand ? this.hanClose : this.hanOpen;
        return han ? han : 0;
    };
    return Yaku;
}());
exports.default = Yaku;
