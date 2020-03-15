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
var Dora = (function (_super) {
    __extends(Dora, _super);
    function Dora() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hanOpen = null;
        _this.hanClose = 1;
        _this.isYakuman = false;
        _this.name = 'ドラ';
        _this.englishName = 'dora';
        return _this;
    }
    Dora.prototype.getHan = function () {
        return this.hand.isCloseHand
            ? this.hanClose * this.handConfig.doraNumber
            : 0;
    };
    Dora.prototype.isConditionMet = function () {
        return this.handConfig.doraNumber > 0;
    };
    return Dora;
}(yaku_1.Yaku));
exports.Dora = Dora;
