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
var Renhou = (function (_super) {
    __extends(Renhou, _super);
    function Renhou() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hanOpen = null;
        _this.hanClose = null;
        _this.isYakuman = true;
        _this.name = '人和';
        _this.englishName = 'renhou';
        return _this;
    }
    Renhou.prototype.isConditionMet = function () {
        return false;
    };
    return Renhou;
}(yaku_1.Yaku));
exports.Renhou = Renhou;
