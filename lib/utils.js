"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tile_1 = require("./constants/tile");
exports.sortTiles = function (tiles) {
    var orderRule = Object.values(tile_1.Tile);
    return tiles
        .slice()
        .sort(function (a, b) {
        return orderRule.indexOf(a.tile) - orderRule.indexOf(b.tile);
    });
};
exports.chooseJuntouCandidates = function (tiles) {
    var juntouCandidates = [];
    var uniqJuntouCandidates = [];
    tiles.forEach(function (srcTile, srcIndex) {
        tiles.forEach(function (destTile, destIndex) {
            if (srcTile.tile === destTile.tile && srcIndex !== destIndex) {
                juntouCandidates.push([srcIndex, destIndex]);
            }
        });
    });
    juntouCandidates.forEach(function (juntouCandidate) {
        if (uniqJuntouCandidates.length <= 0) {
            uniqJuntouCandidates.push(juntouCandidate);
        }
        var duplicates = uniqJuntouCandidates.filter(function (uniqJuntouCandidate) {
            return (juntouCandidate.join() === uniqJuntouCandidate.join() ||
                juntouCandidate.join() ===
                    uniqJuntouCandidate
                        .slice()
                        .reverse()
                        .join());
        });
        if (duplicates.length <= 0) {
            uniqJuntouCandidates.push(juntouCandidate);
        }
    });
    return uniqJuntouCandidates;
};
