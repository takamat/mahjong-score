import Yaku from '../yaku';
declare class AkaDora extends Yaku {
    hanOpen: null;
    hanClose: number;
    isYakuman: boolean;
    name: string;
    englishName: string;
    getHan(): number;
    isConditionMet(): boolean;
}
export default AkaDora;