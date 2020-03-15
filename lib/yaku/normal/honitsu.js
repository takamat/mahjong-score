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
var Honitsu = (function (_super) {
    __extends(Honitsu, _super);
    function Honitsu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hanOpen = 2;
        _this.hanClose = 3;
        _this.isYakuman = false;
        _this.name = '混一色';
        _this.englishName = 'honiisou';
        return _this;
    }
    Honitsu.prototype.isConditionMet = function () {
        return false;
    };
    return Honitsu;
}(yaku_1.Yaku));
exports.Honitsu = Honitsu;
