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
var Shousangen = (function (_super) {
    __extends(Shousangen, _super);
    function Shousangen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hanOpen = 2;
        _this.hanClose = 2;
        _this.isYakuman = false;
        _this.name = '小三元';
        _this.englishName = 'shousangen';
        return _this;
    }
    Shousangen.prototype.isConditionMet = function () {
        return false;
    };
    return Shousangen;
}(yaku_1.Yaku));
exports.Shousangen = Shousangen;
