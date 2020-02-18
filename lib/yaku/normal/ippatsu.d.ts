import Yaku from '../yaku';
declare class Ippatsu extends Yaku {
    hanOpen: null;
    hanClose: number;
    isYakuman: boolean;
    name: string;
    englishName: string;
    isConditionMet(): boolean;
}
export default Ippatsu;
