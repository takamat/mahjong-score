import { TileType, TileGroupType, TileGroupObjectType } from '../types/tileType';
export declare class Hand {
    tiles: TileType[];
    isCloseHand: boolean;
    shuntsuGroups: TileGroupType[];
    koutsuGroups: TileGroupObjectType;
    kantsuGroups: TileGroupObjectType;
    toitsuGroups: TileGroupObjectType;
    koutsuKantsuGroups: TileGroupObjectType;
    constructor(tiles: TileType[]);
    private getKoutsuGroups;
    private getKantsuGroups;
    private getToitsuGroups;
}
