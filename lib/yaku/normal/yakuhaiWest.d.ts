import Yaku from '../yaku';
declare class YakuhaiWest extends Yaku {
    hanOpen: number;
    hanClose: number;
    isYakuman: boolean;
    name: string;
    englishName: string;
    isConditionMet(): boolean;
}
export default YakuhaiWest;
