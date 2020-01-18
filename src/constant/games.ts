export const SLOT_TAB = 'Slots'
export const CASINO_TAB = 'Casino'
export const SPORTS_TAB = 'Sports'
export const LOTTERY_TAB = 'Lottery'
export const POKER_TAB = 'Poker'

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
        idName: 'Spade Gaming',
        image: 'Spade Gaming.png',
        route: ''
      },
      {
        idName: 'PG',
        image: 'PG.png',
        route: ''
      },
      {
        idName: 'Playtech',
        image: 'Playtech.png',
        route: ''
      },
      {
        idName: 'Microgaming',
        image: 'Microgaming.png',
        route: ''
      },
      {
        idName: 'Joker',
        image: 'Joker.png',
        route: ''
      },
      {
        idName: 'Pragmatic',
        image: 'Pragmatic.png',
        route: ''
      }
    ]
  },
  {
    idName: CASINO_TAB,
    providers: [
      {
        idName: 'Spade Gaming',
        image: 'Spade Gaming.png',
        route: ''
      },
      {
        idName: 'PG',
        image: 'PG.png',
        route: ''
      },
      {
        idName: 'Playtech',
        image: 'Playtech.png',
        route: ''
      },
      {
        idName: 'Microgaming',
        image: 'Microgaming.png',
        route: ''
      },
      {
        idName: 'Joker',
        image: 'Joker.png',
        route: ''
      },
      {
        idName: 'Pragmatic',
        image: 'Pragmatic.png',
        route: ''
      }
    ]
  },
  {
    idName: SPORTS_TAB,
    providers: [
      {
        idName: 'Spade Gaming',
        image: 'Spade Gaming.png',
        route: ''
      },
      {
        idName: 'PG',
        image: 'PG.png',
        route: ''
      },
      {
        idName: 'Playtech',
        image: 'Playtech.png',
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
  }
]

export default GAMETYPES;

export const getGameType = (type: string) => GAMETYPES.find(({ idName }: { idName: string }) => idName === type ) || { providers: [], idName: null };