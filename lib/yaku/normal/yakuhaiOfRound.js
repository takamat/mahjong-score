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
var YakuhaiOfRound = /** @class */ (function (_super) {
    __extends(YakuhaiOfRound, _super);
    function YakuhaiOfRound() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hanOpen = 1;
        _this.hanClose = 1;
        _this.isYakuman = false;
        _this.name = '役牌(自風)';
        _this.englishName = 'yakuhai (wind of round)';
        return _this;
    }
    YakuhaiOfRound.prototype.isConditionMet = function () {
        return Object.prototype.hasOwnProperty.call(this.hand.koutsuKantsuGroups, this.handConfig.jiKaze);
    };
    return YakuhaiOfRound;
}(yaku_1.default));
exports.default = YakuhaiOfRound;