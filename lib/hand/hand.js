"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_groupby_1 = __importDefault(require("lodash.groupby"));
var Hand = (function () {
    function Hand(tiles) {
        this.shuntsuGroups = [];
        this.koutsuGroups = {};
        this.kantsuGroups = {};
        this.toitsuGroups = {};
        this.koutsuKantsuGroups = {};
        this.tiles = tiles;
        this.isCloseHand = tiles.findIndex(function (tile) { return tile.isOpen; }) >= 0;
        var groups = lodash_groupby_1.default(tiles, 'tile');
        this.getKoutsuGroups(groups);
        this.getKantsuGroups(groups);
        this.getToitsuGroups(groups);
        this.koutsuKantsuGroups = Object.assign({}, this.koutsuGroups, this.kantsuGroups);
    }
    Hand.prototype.getKoutsuGroups = function (groups) {
        var _this = this;
        Object.keys(groups).forEach(function (tileName) {
            if (groups[tileName].length === 3) {
                _this.koutsuGroups[tileName] = groups[tileName];
            }
        });
    };
    Hand.prototype.getKantsuGroups = function (groups) {
        var _this = this;
        Object.keys(groups).forEach(function (tileName) {
            if (groups[tileName].length === 4) {
                _this.koutsuGroups[tileName] = groups[tileName];
            }
        });
    };
    Hand.prototype.getToitsuGroups = function (groups) {
        var _this = this;
        Object.keys(groups).forEach(function (tileName) {
            if (groups[tileName].length === 2) {
                _this.toitsuGroups[tileName] = groups[tileName];
            }
        });
    };
    return Hand;
}());
exports.Hand = Hand;
