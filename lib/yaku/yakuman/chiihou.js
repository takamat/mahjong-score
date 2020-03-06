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
var yaku_1 = __importDefault(require("./../yaku"));
var Chiihou = /** @class */ (function (_super) {
    __extends(Chiihou, _super);
    function Chiihou() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hanOpen = null;
        _this.hanClose = null;
        _this.isYakuman = true;
        _this.name = '地和';
        _this.englishName = 'chiihou';
        return _this;
    }
    Chiihou.prototype.isConditionMet = function () {
        return false;
    };
    return Chiihou;
}(yaku_1.default));
exports.default = Chiihou;