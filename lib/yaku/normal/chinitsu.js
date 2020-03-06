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
var Chinitsu = /** @class */ (function (_super) {
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
        return false;
    };
    return Chinitsu;
}(yaku_1.default));
exports.default = Chinitsu;