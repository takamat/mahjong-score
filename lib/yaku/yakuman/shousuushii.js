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
var yaku_1 = require("./../yaku");
var Shousuushii = (function (_super) {
    __extends(Shousuushii, _super);
    function Shousuushii() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hanOpen = null;
        _this.hanClose = null;
        _this.isYakuman = true;
        _this.name = '小四喜';
        _this.englishName = 'shousuushii';
        return _this;
    }
    Shousuushii.prototype.isConditionMet = function () {
        return false;
    };
    return Shousuushii;
}(yaku_1.Yaku));
exports.Shousuushii = Shousuushii;
