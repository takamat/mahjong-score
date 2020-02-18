import Yaku from '../yaku';
declare class YakuhaiOfPlace extends Yaku {
    hanOpen: number;
    hanClose: number;
    isYakuman: boolean;
    name: string;
    englishName: string;
    isConditionMet(): boolean;
}
export default YakuhaiOfPlace;
