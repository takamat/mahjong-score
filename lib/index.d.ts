import { Tile } from './constants/tile';
import { TileGroupType } from './types/tileType';
import { Result } from './types/resultType';
declare type handOptionsType = {
    doraNumber?: number;
    akaDoraNumber?: number;
    uraDoraNumber?: number;
    baKaze: Tile;
    jiKaze: Tile;
    isTsumo?: boolean;
    isRiichi?: boolean;
    isDoubleRiichi?: boolean;
    isIppatsu?: boolean;
    isChankan?: boolean;
    isRinshankaihoh?: boolean;
    isHaitei?: boolean;
    isHoutei?: boolean;
};
declare const mahjongScore: (tiles: TileGroupType, handOptions: handOptionsType) => Result;
export default mahjongScore;
