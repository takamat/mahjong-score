export type Score = {
  han: number
  fu: number
  points: number
}

export type FuDetail = {
  fu: number
  reason: string
}

export type Result = {
  score: Score | null
  yaku: string[] | null
  fuDetails: FuDetail[] | null
}
