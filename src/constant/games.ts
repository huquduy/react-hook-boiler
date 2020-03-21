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
  target?: string;
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
        image: 'slots/pg.png',
        route: '/slots/pg'
      },
      {
        idName: 'Playtech',
        image: 'slots/playtech.png',
        route: '/slots/playtech'
      },
      {
        idName: 'Microgaming',
        image: 'slots/microgaming.png',
        route: '/slots/microgaming'
      },
      {
        idName: 'Joker',
        image: 'slots/joker.png',
        route: '/slots/joker'
      },
      {
        idName: 'Asiagaming',
        image: 'slots/asiagaming.png',
        route: '/gs/groups/asiagaming/types/slot/codes/null',
        target: '_blank'
      },
      {
        idName: 'Pragmatic',
        image: 'slots/pragmatic.png',
        route: '/slots/pragmatic'
      },
      {
        idName: '1S',
        image: 'slots/1s.png',
        route: '/slots/s1'
      },
      {
        idName: 'SBO',
        image: 'slots/sbo.png',
        route: '/tg/groups/SBO/types/SBO/codes/CQ9',
        target: '_blank'
      },
      {
        idName: 'Gameplay',
        image: 'slots/gameplay.png',
        route: '/slots/gameplay'
      },
      {
        idName: 'GG gaming',
        image: 'slots/gg.png',
        route: '/gs/groups/gg/types/slot/codes/null',
        target: '_blank',
      },
      {
        idName: 'BBin',
        image: 'slots/bbin.png',
        route: '/gs/groups/bbin/types/slot/codes/Ltlottery',
        target: '_blank',
      }
    ],
    title:'SLOT'
  },
  {
    idName: CASINO_TAB,
    providers: [
      {
        idName: 'Playtech',
        image: 'casinos/playtech.png',
        route: '/gs/groups/playtech/types/slot/codes/7bal',
        target: '_blank',
      },
      {
        idName: 'Allbet',
        image: 'casinos/allbet.png',
        route: '/gs/groups/allbet/types/null/codes/null',
        target: '_blank',
      },
      {
        idName: 'Asiagaming',
        image: 'casinos/asiagaming.png',
        route: '/gs/groups/asiagaming/types/casino/codes/null',
        target: '_blank'
      },
      {
        idName: 'Gameplay',
        image: 'casinos/gameplay.png',
        route: '/gs/groups/gameplay/types/casino/codes/casino',
        target: '_blank',
      },
      {
        idName: 'Microgaming',
        image: 'casinos/microgaming.png',
        route: '/gs/groups/microgaming/types/LC/codes/null',
        target: '_blank',
      },
      {
        idName: 'IDN live',
        image: 'casinos/idn.png',
        route: '/gs/groups/idn/types/null/codes/null',
        target: '_blank',
      },
      {
        idName: 'BBin',
        image: 'casinos/bbin.png',
        route: '/gs/groups/bbin/types/slot/codes/live',
        target: '_blank',
      },
      {
        idName: 'SBO',
        image: 'casinos/sbo.png',
        route: '/tg/groups/SBO/types/SBO/codes/LIVECASINO',
        target: '_blank'
      },
      {
        idName: 'OG',
        image: 'casinos/og.png',
        route: '/gs/groups/og/types/null/codes/null',
        target: '_blank',
      },
      {
        idName: 'ION',
        image: 'casinos/ion.png',
        route: '/tg/groups/TRG/types/ION/codes/BACCARAT',
        target: '_blank',
      },
    ],
    title:'CASINO'
  },
  {
    idName: SPORTS_TAB,
    providers: [
      {
        idName: 'WFT',
        image: 'sportsbook/wft.png',
        route: '/gs/groups/wft/types/null/codes/null',
        target: '_blank',
      },
      {
        idName: 'BNIN',
        image: 'sportsbook/bbin.png',
        route: '/gs/groups/bbin/types/slot/codes/ball',
        target: '_blank',
      },
      {
        idName: 'SBO',
        image: 'sportsbook/sbo.png',
        route: '/tg/groups/SBO/types/SBO/codes/SPORTS',
        target: '_blank',
      }
    ],
    title:'SPORTS'
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
    idName: TANGKAS_TAB,
    providers: [
      
    ], 
    title: 'TANGKAS'
  },
  {
    idName: LOTTERY_TAB,
    providers: [
      
    ],
    title:'LOTTERY'
  },
]

export default GAMETYPES;

export const getGameType = (type: string) => GAMETYPES.find(({ idName }: { idName: string }) => idName.toLocaleLowerCase() === type.toLocaleLowerCase() ) || { providers: [], idName: null };