"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_groupby_1 = __importDefault(require("lodash.groupby"));
var tile_1 = require("./../constants/tile");
var mentsuUtils_1 = require("./mentsuUtils");
var Hand = (function () {
    function Hand(tiles) {
        this.shuntsuList = [];
        this.toitsuList = [];
        this.koutsuList = [];
        this.kantsuList = [];
        this.toitsuKantsuList = [];
        this.koutsuKantsuList = [];
        this.mentsuList = [];
        this.jantou = null;
        var orderRule = Object.values(tile_1.Tile);
        var groups = lodash_groupby_1.default(tiles, 'tile');
        this.tiles = tiles
            .slice()
            .sort(function (a, b) {
            return orderRule.indexOf(a.tile) - orderRule.indexOf(b.tile);
        });
        this.isCloseHand = tiles.findIndex(function (tile) { return tile.isOpen; }) >= 0;
        this.shuntsuList = this.getShuntsuList(tiles);
        this.toitsuList = this.getToitsuList(groups);
        this.koutsuList = this.getKoutsuList(groups);
        this.kantsuList = this.getKantsuList(groups);
        this.toitsuKantsuList = this.toitsuList.concat(this.kantsuList);
        this.koutsuKantsuList = this.koutsuList.concat(this.kantsuList);
        this.mentsuList = this.koutsuKantsuList.concat(this.shuntsuList);
        if (this.toitsuList.length === 1) {
            this.jantou = this.toitsuList[0];
        }
    }
    Hand.prototype.getShuntsuList = function (tiles) {
        var shuntsuRule = [
            [tile_1.Tile.Man1, tile_1.Tile.Man2, tile_1.Tile.Man3],
            [tile_1.Tile.Man2, tile_1.Tile.Man3, tile_1.Tile.Man4],
            [tile_1.Tile.Man3, tile_1.Tile.Man4, tile_1.Tile.Man5],
            [tile_1.Tile.Man4, tile_1.Tile.Man5, tile_1.Tile.Man6],
            [tile_1.Tile.Man5, tile_1.Tile.Man6, tile_1.Tile.Man7],
            [tile_1.Tile.Man6, tile_1.Tile.Man7, tile_1.Tile.Man8],
            [tile_1.Tile.Man7, tile_1.Tile.Man8, tile_1.Tile.Man9],
            [tile_1.Tile.Pin1, tile_1.Tile.Pin2, tile_1.Tile.Pin3],
            [tile_1.Tile.Pin2, tile_1.Tile.Pin3, tile_1.Tile.Pin4],
            [tile_1.Tile.Pin3, tile_1.Tile.Pin4, tile_1.Tile.Pin5],
            [tile_1.Tile.Pin4, tile_1.Tile.Pin5, tile_1.Tile.Pin6],
            [tile_1.Tile.Pin5, tile_1.Tile.Pin6, tile_1.Tile.Pin7],
            [tile_1.Tile.Pin6, tile_1.Tile.Pin7, tile_1.Tile.Pin8],
            [tile_1.Tile.Pin7, tile_1.Tile.Pin8, tile_1.Tile.Pin9],
            [tile_1.Tile.Sou1, tile_1.Tile.Sou2, tile_1.Tile.Sou3],
            [tile_1.Tile.Sou2, tile_1.Tile.Sou3, tile_1.Tile.Sou4],
            [tile_1.Tile.Sou3, tile_1.Tile.Sou4, tile_1.Tile.Sou5],
            [tile_1.Tile.Sou4, tile_1.Tile.Sou5, tile_1.Tile.Sou6],
            [tile_1.Tile.Sou5, tile_1.Tile.Sou6, tile_1.Tile.Sou7],
            [tile_1.Tile.Sou6, tile_1.Tile.Sou7, tile_1.Tile.Sou8],
            [tile_1.Tile.Sou7, tile_1.Tile.Sou8, tile_1.Tile.Sou9],
        ];
        var list = [];
        tiles.forEach(function (tile, index) {
            if (shuntsuRule.some(function (rule) {
                var _a, _b, _c;
                return rule.join() ===
                    [
                        (_a = tiles[index]) === null || _a === void 0 ? void 0 : _a.tile,
                        (_b = tiles[index + 1]) === null || _b === void 0 ? void 0 : _b.tile,
                        (_c = tiles[index + 2]) === null || _c === void 0 ? void 0 : _c.tile,
                    ].join();
            })) {
                list.push(mentsuUtils_1.getShuntsu([tiles[index], tiles[index + 1], tiles[index + 2]]));
            }
        });
        return list;
    };
    Hand.prototype.getToitsuList = function (groups) {
        var list = [];
        Object.keys(groups).forEach(function (tileName) {
            if (groups[tileName].length === 2) {
                list.push(mentsuUtils_1.getToitsu(groups[tileName]));
            }
        });
        return list;
    };
    Hand.prototype.getKoutsuList = function (groups) {
        var list = [];
        Object.keys(groups).forEach(function (tileName) {
            if (groups[tileName].length === 3) {
                list.push(mentsuUtils_1.getKoutsu(groups[tileName]));
            }
        });
        return list;
    };
    Hand.prototype.getKantsuList = function (groups) {
        var list = [];
        Object.keys(groups).forEach(function (tileName) {
            if (groups[tileName].length === 4) {
                list.push(mentsuUtils_1.getKantsu(groups[tileName]));
            }
        });
        return list;
    };
    return Hand;
}());
exports.Hand = Hand;
