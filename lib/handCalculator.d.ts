import { Tiles34Type } from './types/tilesType';
import HandConfigType from './types/handConfigType';
declare type Score = {
    han: number;
    fu: number;
    points: number;
};
declare type FuDetail = {
    fu: number;
    reason: string;
};
declare type Result = {
    score: Score;
    yaku: Array<string>;
    fuDetails: Array<FuDetail>;
};
declare const handCalculator: (tiles: Tiles34Type, handConfig: HandConfigType) => Result;
export default handCalculator;
