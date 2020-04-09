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
var suit_1 = require("../../constants/suit");
var Chinitsu = (function (_super) {
    __extends(Chinitsu, _super);
    function Chinitsu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hanOpen = 5;
        _this.hanClose = 6;
        _this.isYakuman = false;
        _this.name = '清一色';
        _this.englishName = 'chiniisou';
        return _this;
    }
    Chinitsu.prototype.isConditionMet = function () {
        var _a, _b, _c;
        var suits = this.hand.mentsuList.map(function (mentsu) { return mentsu.suit; });
        if (suits.every(function (suit) { return suit_1.Suit.Man; }) && ((_a = this.hand.jantou) === null || _a === void 0 ? void 0 : _a.suit) === suit_1.Suit.Man) {
            return true;
        }
        if (suits.every(function (suit) { return suit_1.Suit.Pin; }) && ((_b = this.hand.jantou) === null || _b === void 0 ? void 0 : _b.suit) === suit_1.Suit.Pin) {
            return true;
        }
        if (suits.every(function (suit) { return suit_1.Suit.Sou; }) && ((_c = this.hand.jantou) === null || _c === void 0 ? void 0 : _c.suit) === suit_1.Suit.Sou) {
            return true;
        }
        return false;
    };
    return Chinitsu;
}(yaku_1.Yaku));
exports.Chinitsu = Chinitsu;
