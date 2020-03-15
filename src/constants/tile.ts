export const Tile = {
  Man1: 'man1',
  Man2: 'man2',
  Man3: 'man3',
  Man4: 'man4',
  Man5: 'man5',
  Man6: 'man6',
  Man7: 'man7',
  Man8: 'man8',
  Man9: 'man9',

  Pin1: 'pin1',
  Pin2: 'pin2',
  Pin3: 'pin3',
  Pin4: 'pin4',
  Pin5: 'pin5',
  Pin6: 'pin6',
  Pin7: 'pin7',
  Pin8: 'pin8',
  Pin9: 'pin9',

  Sou1: 'sou1',
  Sou2: 'sou2',
  Sou3: 'sou3',
  Sou4: 'sou4',
  Sou5: 'sou5',
  Sou6: 'sou6',
  Sou7: 'sou7',
  Sou8: 'sou8',
  Sou9: 'sou9',

  Ton: 'ton',
  Nan: 'nan',
  Sha: 'sha',
  Pei: 'pei',

  Haku: 'haku',
  Hatsu: 'hatsu',
  Chun: 'chun',
}

export type Tile = typeof Tile[keyof typeof Tile]
