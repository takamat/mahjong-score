"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var yaku_1 = require("../yaku");
var tile_1 = require("./../../constants/tile");
var YakuhaiHaku = (function (_super) {
    __extends(YakuhaiHaku, _super);
    function YakuhaiHaku() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hanOpen = 1;
        _this.hanClose = 1;
        _this.isYakuman = false;
        _this.name = '役牌(白)';
        _this.englishName = 'yakuhai (haku)';
        return _this;
    }
    YakuhaiHaku.prototype.isConditionMet = function () {
        return (this.hand.koutsuKantsuList.findIndex(function (mentsu) { return mentsu.tile === tile_1.Tile.Haku; }) >= 0);
    };
    return YakuhaiHaku;
}(yaku_1.Yaku));
exports.YakuhaiHaku = YakuhaiHaku;
