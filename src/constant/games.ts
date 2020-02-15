export const SLOT_TAB = 'Slots'
const CASINO_TAB = 'Casino'
const SPORTS_TAB = 'Sports'
const LOTTERY_TAB = 'Lottery'
const POKER_TAB = 'Poker'
const TANGKAS_TAB = 'Tangkas'

export interface IProviderProps {
  idName?: string;
  image: string;
  route: string;
}

export interface IGameTypeProps {
  providers: IProviderProps[];
  idName: string;
}

const GAMETYPES = [
  {
    idName: SLOT_TAB,
    providers: [
      {
        idName: 'PG',
        image: 'pg.png',
        route: ''
      },
      {
        idName: 'Playtech',
        image: 'playtech.png',
        route: ''
      },
      {
        idName: 'Microgaming',
        image: 'microgaming.png',
        route: ''
      },
      {
        idName: 'Joker',
        image: 'joker.png',
        route: ''
      },
      {
        idName: 'Pragmatic',
        image: 'pragmatic.png',
        route: ''
      },
      {
        idName: '1S',
        image: '1s.png',
        route: ''
      },
      {
        idName: 'SBO',
        image: 'sbo.png',
        route: ''
      },
      {
        idName: 'Gameplay',
        image: 'gameplay.png',
        route: ''
      }
    ]
  },
  {
    idName: CASINO_TAB,
    providers: [
      {
        idName: 'Playtech',
        image: 'playtech.png',
        route: ''
      },
      {
        idName: 'Microgaming',
        image: 'microgaming.png',
        route: ''
      },
      {
        idName: 'Gameplay',
        image: 'gameplay.png',
        route: ''
      },
      {
        idName: 'SBO',
        image: 'sbo.png',
        route: ''
      }
      
    ]
  },
  {
    idName: SPORTS_TAB,
    providers: [
      {
        idName: 'BNIN',
        image: 'bbin.png',
        route: ''
      }
    ]
  },
  {
    idName: LOTTERY_TAB,
    providers: [
      
    ]
  },
  {
    idName: POKER_TAB,
    providers: [
      
    ]
  },
  {
    idName: TANGKAS_TAB,
    providers: [
      
    ]
  }
]

export default GAMETYPES;

export const getGameType = (type: string) => GAMETYPES.find(({ idName }: { idName: string }) => idName.toLocaleLowerCase() === type.toLocaleLowerCase() ) || { providers: [], idName: null };