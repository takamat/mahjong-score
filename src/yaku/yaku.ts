import { HandConfigType } from '../types/handType'
import { YakuType } from '../types/yakuType'
import { Hand } from './../hand/hand'

export abstract class Yaku {
  protected hand: Hand
  protected handConfig: HandConfigType
  abstract hanOpen: number | null
  abstract hanClose: number | null
  abstract isYakuman: boolean
  abstract name: string
  abstract englishName: string

  constructor(hand: Hand, handConfig: HandConfigType) {
    this.hand = hand
    this.handConfig = handConfig
  }

  getHan(): number {
    const han = this.hand.isCloseHand ? this.hanClose : this.hanOpen
    return han ?? 0
  }

  getYakuData(): YakuType {
    return {
      name: this.name,
      han: this.getHan(),
      isYakuman: this.isYakuman,
    }
  }

  abstract isConditionMet(): boolean
}
