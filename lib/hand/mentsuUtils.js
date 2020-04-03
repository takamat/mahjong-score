"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tile_1 = require("./../constants/tile");
var suit_1 = require("./../constants/suit");
var getSuit = function (tile) {
    if (tile === tile_1.Tile.Man1 ||
        tile === tile_1.Tile.Man2 ||
        tile === tile_1.Tile.Man3 ||
        tile === tile_1.Tile.Man4 ||
        tile === tile_1.Tile.Man5 ||
        tile === tile_1.Tile.Man6 ||
        tile === tile_1.Tile.Man7 ||
        tile === tile_1.Tile.Man8 ||
        tile === tile_1.Tile.Man9) {
        return suit_1.Suit.Man;
    }
    else if (tile === tile_1.Tile.Pin1 ||
        tile === tile_1.Tile.Pin2 ||
        tile === tile_1.Tile.Pin3 ||
        tile === tile_1.Tile.Pin4 ||
        tile === tile_1.Tile.Pin5 ||
        tile === tile_1.Tile.Pin6 ||
        tile === tile_1.Tile.Pin7 ||
        tile === tile_1.Tile.Pin8 ||
        tile === tile_1.Tile.Pin9) {
        return suit_1.Suit.Pin;
    }
    else if (tile === tile_1.Tile.Sou1 ||
        tile === tile_1.Tile.Sou2 ||
        tile === tile_1.Tile.Sou3 ||
        tile === tile_1.Tile.Sou4 ||
        tile === tile_1.Tile.Sou5 ||
        tile === tile_1.Tile.Sou6 ||
        tile === tile_1.Tile.Sou7 ||
        tile === tile_1.Tile.Sou8 ||
        tile === tile_1.Tile.Sou9) {
        return suit_1.Suit.Sou;
    }
    else if (tile === tile_1.Tile.Ton ||
        tile === tile_1.Tile.Nan ||
        tile === tile_1.Tile.Sha ||
        tile === tile_1.Tile.Pei) {
        return suit_1.Suit.Kazehai;
    }
    else {
        return suit_1.Suit.Sangenpai;
    }
};
var getTileNumber = function (tile) {
    var suit = getSuit(tile);
    if (suit === suit_1.Suit.Man || suit === suit_1.Suit.Pin || suit === suit_1.Suit.Sou) {
        return parseInt(tile.charAt(3), 10);
    }
    return null;
};
exports.getShuntsu = function (shuntsuTiles) {
    return {
        suit: getSuit(shuntsuTiles[1].tile),
        number: getTileNumber(shuntsuTiles[1].tile),
        isOpen: shuntsuTiles.findIndex(function (tile) { return tile.isOpen; }) >= 0,
    };
};
exports.getToitsu = function (toitsuTiles) {
    return {
        tile: toitsuTiles[0].tile,
        suit: getSuit(toitsuTiles[0].tile),
        number: getTileNumber(toitsuTiles[0].tile),
        isOpen: false,
    };
};
exports.getKoutsu = function (koutsuTiles) {
    return {
        tile: koutsuTiles[0].tile,
        suit: getSuit(koutsuTiles[0].tile),
        number: getTileNumber(koutsuTiles[0].tile),
        isOpen: koutsuTiles.findIndex(function (tile) { return tile.isOpen; }) >= 0,
    };
};
exports.getKantsu = exports.getKoutsu;
