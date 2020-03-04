import Tile from './../constants/tile';
declare type HandConfigType = {
    doraNumber: number;
    akaDoraNumber: number;
    uraDoraNumber: number;
    baKaze: Tile;
    jiKaze: Tile;
    isTsumo: boolean;
    isRiichi: boolean;
    isDoubleRiichi: boolean;
    isIppatsu: boolean;
    isChankan: boolean;
    isRinshankaihoh: boolean;
};
export default HandConfigType;
