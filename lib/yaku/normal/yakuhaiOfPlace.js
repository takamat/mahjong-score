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
var YakuhaiOfPlace = (function (_super) {
    __extends(YakuhaiOfPlace, _super);
    function YakuhaiOfPlace() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hanOpen = 1;
        _this.hanClose = 1;
        _this.isYakuman = false;
        _this.name = '役牌(場風)';
        _this.englishName = 'yakuhai (wind of place)';
        return _this;
    }
    YakuhaiOfPlace.prototype.isConditionMet = function () {
        var _this = this;
        return (this.hand.koutsuKantsuList.findIndex(function (mentsu) { return mentsu.tile === _this.handConfig.baKaze; }) >= 0);
    };
    return YakuhaiOfPlace;
}(yaku_1.Yaku));
exports.YakuhaiOfPlace = YakuhaiOfPlace;
