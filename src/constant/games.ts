export const SLOT_TAB = 'Slots'
const CASINO_TAB = 'Casino'
const SPORTS_TAB = 'Sports'
const LOTTERY_TAB = 'Lottery'
const POKER_TAB = 'Poker'
const TANGKAS_TAB = 'Tangkas'
const FISHHUNTER_TAB = 'Fishing'
const COCK_FIGHT = 'fight'

export interface IProviderProps {
  idName?: string;
  image: string;
  route: string;
  target?: string;
  nav: string;
}

export interface IGameTypeProps {
  providers: IProviderProps[];
  idName: string;
  route: string;
  title: string;
}

const GAMETYPES = [
  {
    idName: SLOT_TAB,
    providers: [
      {
        idName: 'Play And Go',
        image: 'slots/playandgo.png',
        nav: 'slots/W_PLAYNGO.png',
        route: '/slots/playandgo'
      },
      {
        idName: 'Habanero',
        image: 'slots/habanero.png',
        nav: 'slots/W_HABANERO.png',
        route: '/slots/habanero'
      },
      {
        idName: 'PG',
        image: 'slots/pg.png',
        nav: 'slots/W_PG.png',
        route: '/slots/pg'
      },
      {
        idName: 'Playtech',
        image: 'slots/playtech.png',
        nav: 'slots/W_PLAYTECH.png',
        route: '/slots/playtech'
      },
      {
        idName: 'Microgaming',
        image: 'slots/microgaming.png',
        nav: 'slots/W_MG.png',
        route: '/slots/microgaming'
      },
      {
        idName: 'Joker',
        image: 'slots/joker.png',
        nav: 'slots/W_JOKER.png',
        route: '/slots/joker'
      },
      {
        idName: 'Asiagaming',
        image: 'slots/asiagaming.png',
        nav: 'slots/W_AG.png',
        route: '/gs/groups/asiagaming/types/slot/codes/null',
        target: '_blank'
      },
      {
        idName: 'Pragmatic',
        image: 'slots/pragmatic.png',
        nav: 'slots/W_PRAGMATIC.png',
        route: '/slots/pragmatic'
      },
      {
        idName: '1S',
        image: 'slots/1s.png',
        nav: 'slots/W_1st.png',
        route: '/slots/s1'
      },
      {
        idName: 'SBO',
        image: 'slots/sbo.png',
        nav: 'slots/W_SBO.png',
        route: '/tg/groups/SBO/types/SBO/codes/CQ9',
        target: '_blank'
      },
      {
        idName: 'Gameplay',
        image: 'slots/gameplay.png',
        nav: 'slots/W_GAMEPLAY.png',
        route: '/slots/gameplay'
      },
      {
        idName: 'GG gaming',
        image: 'slots/gg.png',
        nav: 'slots/W_GG.png',
        route: '/gs/groups/gg/types/slot/codes/null',
        target: '_blank',
      },
      {
        idName: 'BBin',
        image: 'slots/bbin.png',
        nav: 'slots/W_BBIN.png',
        route: '/gs/groups/bbin/types/slot/codes/Ltlottery',
        target: '_blank',
      },
    ],
    route: '/slots',
    title: 'SLOT'
  },
  {
    idName: CASINO_TAB,
    providers: [
      {
        idName: 'Playtech',
        image: 'casinos/playtech.png',
        nav: 'casinos/W_PLAYTECH.png',
        route: '/gs/groups/playtech/types/slot/codes/7bal',
        target: '_blank',
      },
      {
        idName: 'Allbet',
        image: 'casinos/allbet.png',
        nav: 'casinos/W_ALLBET.png',
        route: '/gs/groups/allbet/types/null/codes/null',
        target: '_blank',
      },
      {
        idName: 'Asiagaming',
        image: 'casinos/asiagaming.png',
        nav: 'casinos/W_AG.png',
        route: '/gs/groups/asiagaming/types/casino/codes/null',
        target: '_blank'
      },
      {
        idName: 'Gameplay',
        image: 'casinos/gameplay.png',
        nav: 'casinos/W_GAMEPLAY.png',
        route: '/gs/groups/gameplay/types/casino/codes/casino',
        target: '_blank',
      },
      {
        idName: 'Microgaming',
        image: 'casinos/microgaming.png',
        nav: 'casinos/W_MICRO.png',
        route: '/gs/groups/microgaming/types/LC/codes/null',
        target: '_blank',
      },
      {
        idName: 'IDN live',
        image: 'casinos/idn.png',
        nav: 'casinos/W_IDN.png',
        route: '/gs/groups/idn/types/null/codes/null',
        target: '_blank',
      },
      {
        idName: 'BBin',
        image: 'casinos/bbin.png',
        nav: 'casinos/W_BBIN.png',
        route: '/gs/groups/bbin/types/slot/codes/live',
        target: '_blank',
      },
      {
        idName: 'SBO',
        image: 'casinos/sbo.png',
        nav: 'casinos/W_SBO.png',
        route: '/tg/groups/SBO/types/SBO/codes/LIVECASINO',
        target: '_blank'
      },
      {
        idName: 'OG',
        image: 'casinos/og.png',
        nav: 'casinos/W_OG.png',
        route: '/gs/groups/og/types/null/codes/null',
        target: '_blank',
      },
      {
        idName: 'ION',
        image: 'casinos/ion.png',
        nav: 'casinos/W_ION.png',
        route: '/tg/groups/TRG/types/ION/codes/BACCARAT',
        target: '_blank',
      },
      {
        idName: 'SA',
        image: 'casinos/sa.png',
        nav: 'casinos/W_SAGAMING.png',
        route: '/gs/groups/sa/types/LC/codes/null',
        target: '_blank',
      }
    ],
    route: '/casino',
    title:'CASINO'
  },
  {
    idName: SPORTS_TAB,
    providers: [
      {
        idName: 'BNIN',
        image: 'sportsbook/bbin.png',
        nav: 'sportsbook/W_BBIN.png',
        route: '/gs/groups/bbin/types/slot/codes/ball',
        target: '_blank',
      },
      {
        idName: 'SBO',
        image: 'sportsbook/sbo.png',
        nav: 'sportsbook/W_SBO.png',
        route: '/tg/groups/SBO/types/SBO/codes/SPORTS',
        target: '_blank',
      }
    ],
    route: '/sports',
    title:'SPORTS'
  },
  {
    idName: FISHHUNTER_TAB,
    providers: [
      {
        idName: 'PLAYTECH',
        image: 'fishhunter/playtech.png',
        nav: 'fishhunter/M_PLAYTECH.png',
        route: '/gs/groups/playtech/types/slot/codes/cashfi',
        target: '_blank',
      },
      {
        idName: 'GG GAMING',
        image: 'fishhunter/gg.png',
        nav: 'fishhunter/W_GG.png',
        route: '/gs/groups/gg/types/slot/codes/null',
        target: '_blank',
      },
      {
        idName: 'JOKER',
        image: 'fishhunter/joker.png',
        nav: 'fishhunter/W_JOKER.png',
        route: '/tg/groups/JOKER/types/SLOTS/codes/Fishing',
        target: '_blank',
      }
      
    ],
    route: '/fishing',
    title: 'FISH HUNTER'
  },
  {
    idName: COCK_FIGHT,
    providers: [
      {
        idName: COCK_FIGHT,
        image: 'cockfight/cockfight.png',
        nav: 'cockfight/W_COCKFIGHT.png',
        route: '/gs/groups/cookfight/types/null/codes/null',
        target: '_blank',
      }
    ],
    route: '/cookfight',
    title: COCK_FIGHT
  },
  {
    idName: POKER_TAB,
    providers: [
      {
        idName: 'IDN',
        image: 'poker/idn.png',
        nav: 'poker/W_POKER.png',
        route: '/gs/groups/idnPoker/types/null/codes/null',
        target: '_blank',
      }
    ],
    route: '/poker',
    title:'POKER'
  },
  {
    idName: TANGKAS_TAB,
    providers: [
      {
        idName: TANGKAS_TAB,
        image: 'tangkas/tangkas.png',
        nav: 'tangkas/W_tangkas.png',
        route: '/gs/groups/tangkas/types/null/codes/null',
        target: '_blank',
      }
    ], 
    route: '/tangkas',
    title: 'TANGKAS'
  },
  {
    idName: LOTTERY_TAB,
    providers: [
      {
        idName: LOTTERY_TAB,
        image: 'lottery/toto4d.png',
        nav: 'lottery/W_LOTTERY.png',
        route: '/gs/groups/toto4d/types/null/codes/null',
        target: '_blank',
      }
    ],
    route: '/lottery',
    title:'LOTTERY'
  },
]

export default GAMETYPES;

export const getGameType = (type: string) => 
  GAMETYPES.find(({ idName }: { idName: string }) =>
    idName.toLocaleLowerCase() === type.toLocaleLowerCase() ) || { providers: [], idName: null, route: '/', title: '' }