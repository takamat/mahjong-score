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
var Sanshoku = (function (_super) {
    __extends(Sanshoku, _super);
    function Sanshoku() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hanOpen = 1;
        _this.hanClose = 2;
        _this.isYakuman = false;
        _this.name = '三色同順';
        _this.englishName = 'sanshoku doujun';
        return _this;
    }
    Sanshoku.prototype.isConditionMet = function () {
        return false;
    };
    return Sanshoku;
}(yaku_1.Yaku));
exports.Sanshoku = Sanshoku;
