import HandConfigType from './../types/handConfigType';
import Hand from './../hand/hand';
declare abstract class Yaku {
    protected hand: Hand;
    protected handConfig: HandConfigType;
    abstract hanOpen: number | null;
    abstract hanClose: number | null;
    abstract isYakuman: boolean;
    abstract name: string;
    abstract englishName: string;
    constructor(hand: Hand, handConfig: HandConfigType);
    getHan(): number;
    abstract isConditionMet(): boolean;
}
export default Yaku;
