import { Tiles34Type } from './types/tilesType'
import HandConfigType from './types/handConfigType'
import YakuConfig from './yaku/yakuConfig'

interface Score {
  han: number
  fu: number
  points: number
}

interface FuDetail {
  fu: number
  reason: string
}

interface Result {
  score: Score
  yaku: string[]
  fuDetails: FuDetail[]
}

const handCalculator = (
  tiles: Tiles34Type,
  handConfig: HandConfigType,
): Result => {
  const config = new YakuConfig(tiles, handConfig)
  const score = { han: 0, fu: 0, points: 0 }
  const handYaku: string[] = []
  const fuDetails: FuDetail[] = []

  // if (!isAgari) {
  //   return { error: '' }
  // }

  if (config.akaDora.isConditionMet()) {
    handYaku.push(config.akaDora.name)
    score.han += config.akaDora.getHan()
  }

  return { score, yaku: handYaku, fuDetails }
}

export default handCalculator
