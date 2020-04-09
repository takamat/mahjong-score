import { TileType } from '../types/tileType';
import { MentsuType } from '../types/handType';
export declare class Hand {
    tiles: TileType[];
    isCloseHand: boolean;
    shuntsuList: MentsuType[];
    toitsuList: MentsuType[];
    koutsuList: MentsuType[];
    kantsuList: MentsuType[];
    toitsuKantsuList: MentsuType[];
    koutsuKantsuList: MentsuType[];
    mentsuList: MentsuType[];
    jantou: MentsuType | null;
    constructor(tiles: TileType[], juntou: [number, number]);
    private getShuntsuList;
    private getToitsuList;
    private getKoutsuList;
    private getKantsuList;
}
