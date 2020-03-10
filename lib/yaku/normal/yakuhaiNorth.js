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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yaku_1 = __importDefault(require("../yaku"));
var tile_1 = __importDefault(require("./../../constants/tile"));
var YakuhaiNorth = (function (_super) {
    __extends(YakuhaiNorth, _super);
    function YakuhaiNorth() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hanOpen = 1;
        _this.hanClose = 1;
        _this.isYakuman = false;
        _this.name = '役牌(北)';
        _this.englishName = 'yakuhai (north)';
        return _this;
    }
    YakuhaiNorth.prototype.isConditionMet = function () {
        return Object.prototype.hasOwnProperty.call(this.hand.koutsuKantsuGroups, tile_1.default.Pei);
    };
    return YakuhaiNorth;
}(yaku_1.default));
exports.default = YakuhaiNorth;
