import Yaku from '../yaku';
declare class YakuhaiChun extends Yaku {
    hanOpen: number;
    hanClose: number;
    isYakuman: boolean;
    name: string;
    englishName: string;
    isConditionMet(): boolean;
}
export default YakuhaiChun;
