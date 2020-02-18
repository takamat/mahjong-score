import Yaku from './../yaku';
declare class Tenhou extends Yaku {
    hanOpen: null;
    hanClose: null;
    isYakuman: boolean;
    name: string;
    englishName: string;
    isConditionMet(): boolean;
}
export default Tenhou;
