import Tile from '../constants/tile';
export declare type TileType = {
    tile: Tile;
    isOpen?: boolean;
    isWinTile?: boolean;
};
export declare type TileGroupType = TileType[];
export declare type TileGroupObjectType = {
    [P in Tile]: TileGroupType;
};
