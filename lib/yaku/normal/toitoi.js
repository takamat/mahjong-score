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
var Toitoi = (function (_super) {
    __extends(Toitoi, _super);
    function Toitoi() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hanOpen = 2;
        _this.hanClose = 2;
        _this.isYakuman = false;
        _this.name = '対々和';
        _this.englishName = 'toitoihou';
        return _this;
    }
    Toitoi.prototype.isConditionMet = function () {
        if (this.hand.koutsuKantsuList.length >= 4) {
            return true;
        }
        return false;
    };
    return Toitoi;
}(yaku_1.Yaku));
exports.Toitoi = Toitoi;
