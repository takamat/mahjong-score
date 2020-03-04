import HandConfigType from '../types/handConfigType';
import { Result } from '../types/resultType';
import Hand from './../hand/hand';
declare const handCalculator: (hand: Hand, handConfig: HandConfigType) => Result;
export default handCalculator;
