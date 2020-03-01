import joker from './joker.constant'
import playtech from './playtech.constant'

export interface IGames {
  code: string,
  name: string,
  thumbnail: string,
  group?: string,
}

export default {
  joker,
  playtech,
}