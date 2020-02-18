import Yaku from '../yaku';
declare class YakuhaiHatsu extends Yaku {
    hanOpen: number;
    hanClose: number;
    isYakuman: boolean;
    name: string;
    englishName: string;
    isConditionMet(): boolean;
}
export default YakuhaiHatsu;
