import { Tile } from '../constants/tile';
export declare type TileType = {
    tile: Tile;
    isOpen?: boolean;
    isWinTile?: boolean;
};
export declare type TileListType = TileType[];
export declare type TileListGroupType = {
    [P in Tile]: TileListType;
};
