import { Tiles34Type } from './../types/tilesType';
import HandConfigType from './../types/handConfigType';
declare abstract class Yaku {
    private tiles;
    private handConfig;
    abstract hanOpen: number | null;
    abstract hanClose: number | null;
    abstract isYakuman: boolean;
    abstract name: string;
    abstract englishName: string;
    constructor(tiles: Tiles34Type, handConfig: HandConfigType);
    getHan(): number;
    abstract isConditionMet(): boolean;
}
export default Yaku;
