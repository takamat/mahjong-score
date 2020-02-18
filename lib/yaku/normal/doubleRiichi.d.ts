import Yaku from '../yaku';
declare class DoubleRiichi extends Yaku {
    hanOpen: null;
    hanClose: number;
    isYakuman: boolean;
    name: string;
    englishName: string;
    isConditionMet(): boolean;
}
export default DoubleRiichi;
