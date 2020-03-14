import gameplay from './gameplay.constant'
import joker from './joker.constant'
import microgaming from './microgaming.constant'
import playtech from './playtech.constant'

export interface IGames {
  code: string,
  name: string,
  thumbnail: string,
  group?: string,
  linkGame?: string,
}

export default {
  gameplay,
  joker,
  microgaming,
  playtech,
}