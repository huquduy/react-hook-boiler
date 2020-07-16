import s1 from './1s.constant'
import gameplay from './gameplay.constant'
import habanero from './habanero.constant'
import joker from './joker.constant'
import microgaming from './microgaming.constant'
import pg from './pg.constant'
import playandgo from './playAndGo.constant'
import playtech from './playtech.constant'
import pragmatic from './pragmatic.constant'
import sa from './sa.constant'

export interface IGames {
  code: string,
  name: string,
  thumbnail: string,
  group?: string,
  linkGame?: string,
}

export default {
  gameplay,
  habanero,
  joker,
  microgaming,
  pg,
  playtech,
  playandgo,
  pragmatic,
  s1,
  sa
}