import { HandConfigType } from './types/handType'
import { YakuType } from './types/yakuType'
import { FuDetail, Result } from './types/resultType'

export const calcScore = (
  yakuList: YakuType[],
  handConfig: HandConfigType,
): Result => {
  const score = { han: 0, fu: 0, points: 0 }
  const yaku: string[] = yakuList.map(yaku => yaku.name)
  const fuDetails: FuDetail[] = []

  return { score, yaku, fuDetails }
}
