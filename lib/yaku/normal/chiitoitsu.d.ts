import Yaku from '../yaku';
declare class Chiitoitsu extends Yaku {
    hanOpen: null;
    hanClose: number;
    isYakuman: boolean;
    name: string;
    englishName: string;
    isConditionMet(): boolean;
}
export default Chiitoitsu;
