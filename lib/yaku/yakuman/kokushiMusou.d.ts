import Yaku from './../yaku';
declare class KokushiMusou extends Yaku {
    hanOpen: null;
    hanClose: null;
    isYakuman: boolean;
    name: string;
    englishName: string;
    isConditionMet(): boolean;
}
export default KokushiMusou;
