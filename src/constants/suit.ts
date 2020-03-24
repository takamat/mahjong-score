export const Suit = {
  Man: 'man',
  Pin: 'pin',
  Sou: 'sou',
  Kazehai: 'kazehai',
  Sangenpai: 'sangenpai',
}

export type Suit = typeof Suit[keyof typeof Suit]
