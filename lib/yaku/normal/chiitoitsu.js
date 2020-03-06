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
var Chiitoitsu = /** @class */ (function (_super) {
    __extends(Chiitoitsu, _super);
    function Chiitoitsu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hanOpen = null;
        _this.hanClose = 2;
        _this.isYakuman = false;
        _this.name = '七対子';
        _this.englishName = 'chiitoitsu';
        return _this;
    }
    Chiitoitsu.prototype.isConditionMet = function () {
        return false;
    };
    return Chiitoitsu;
}(yaku_1.default));
exports.default = Chiitoitsu;