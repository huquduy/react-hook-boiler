export const SLOT_TAB = 'Slots'
const CASINO_TAB = 'Casino'
const SPORTS_TAB = 'Sports'
const LOTTERY_TAB = 'Lottery'
const POKER_TAB = 'Poker'
const TANGKAS_TAB = 'Tangkas'
const FISHHUNTER_TAB = 'FishHunter'

export interface IProviderProps {
  idName?: string;
  image: string;
  route: string;
}

export interface IGameTypeProps {
  providers: IProviderProps[];
  idName: string;
  title: string;
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
    ],
    title:'SLOT'
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
      
    ],
    title:'CASINO'
  },
  {
    idName: SPORTS_TAB,
    providers: [
      {
        idName: 'BNIN',
        image: 'bbin.png',
        route: ''
      }
    ],
    title:'SPORTS'
  },
  {
    idName: LOTTERY_TAB,
    providers: [
      
    ],
    title:'LOTTERY'
  },
  {
    idName: POKER_TAB,
    providers: [
      {
        idName: 'BNIN',
        image: 'bbin.png',
        route: ''
      }
      
    ],
    title:'POKER'
  },
  {
    idName: FISHHUNTER_TAB,
    providers: [
      {
        idName: 'PLAYTECH',
        image: 'PLAYTECH-min.png',
        route: ''
      },
      {
        idName: 'GG GAMING',
        image: 'GG-GAMING-min.png',
        route: ''
      },
      {
        idName: 'JOKER',
        image: 'HB-JOKER-min.png',
        route: ''
      }
      
    ], 
    title:'FISH HUNTER'
  },
  {
    idName: TANGKAS_TAB,
    providers: [
      
    ], 
    title: 'TANGKAS'
  }
]

export default GAMETYPES;

export const getGameType = (type: string) => GAMETYPES.find(({ idName }: { idName: string }) => idName.toLocaleLowerCase() === type.toLocaleLowerCase() ) || { providers: [], idName: null };