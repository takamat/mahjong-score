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
var suit_1 = require("./../../constants/suit");
var yaku_1 = require("../yaku");
var Ittsuu = (function (_super) {
    __extends(Ittsuu, _super);
    function Ittsuu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hanOpen = 1;
        _this.hanClose = 2;
        _this.isYakuman = false;
        _this.name = '一気通貫';
        _this.englishName = 'ikkitsuukan';
        return _this;
    }
    Ittsuu.prototype.isConditionMet = function () {
        if (this.hand.shuntsuList.length < 3) {
            return false;
        }
        if (this.hand.shuntsuList.some(function (shuntsu) { return shuntsu.suit === suit_1.Suit.Man && shuntsu.number === 2; }) &&
            this.hand.shuntsuList.some(function (shuntsu) { return shuntsu.suit === suit_1.Suit.Man && shuntsu.number === 5; }) &&
            this.hand.shuntsuList.some(function (shuntsu) { return shuntsu.suit === suit_1.Suit.Man && shuntsu.number === 7; })) {
            return true;
        }
        if (this.hand.shuntsuList.some(function (shuntsu) { return shuntsu.suit === suit_1.Suit.Pin && shuntsu.number === 2; }) &&
            this.hand.shuntsuList.some(function (shuntsu) { return shuntsu.suit === suit_1.Suit.Pin && shuntsu.number === 5; }) &&
            this.hand.shuntsuList.some(function (shuntsu) { return shuntsu.suit === suit_1.Suit.Pin && shuntsu.number === 7; })) {
            return true;
        }
        if (this.hand.shuntsuList.some(function (shuntsu) { return shuntsu.suit === suit_1.Suit.Sou && shuntsu.number === 2; }) &&
            this.hand.shuntsuList.some(function (shuntsu) { return shuntsu.suit === suit_1.Suit.Sou && shuntsu.number === 5; }) &&
            this.hand.shuntsuList.some(function (shuntsu) { return shuntsu.suit === suit_1.Suit.Sou && shuntsu.number === 7; })) {
            return true;
        }
        return false;
    };
    return Ittsuu;
}(yaku_1.Yaku));
exports.Ittsuu = Ittsuu;
