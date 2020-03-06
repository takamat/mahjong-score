import Yaku from '../yaku';
declare class Dora extends Yaku {
    hanOpen: null;
    hanClose: number;
    isYakuman: boolean;
    name: string;
    englishName: string;
    getHan(): number;
    isConditionMet(): boolean;
}
export default Dora;
