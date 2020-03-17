// export default () => [
//   {
//     icon: 'home.png',
//     route: '/home',
//     title: 'Home',
//   },
//   {
//     icon: 'sports.png',
//     route: '/sports',
//     title: 'Sports',
//   },
//   {
//     icon: 'casino.png',
//     route: '/casino',
//     title: 'Casino',
//   },
//   {
//     icon: 'slots.png',
//     route: '/slots/joker',
//     title: 'Slots',
//   },
//   {
//     icon: 'lottery.png',
//     route: '/lottery',
//     title: 'Lottery',
//   },
//   {
//     icon: 'tangkas.png',
//     route: '/tangkas',
//     title: 'Tangkas',
//   },
//   {
//     icon: 'fishhunter.png',
//     route: '/fishhunter',
//     title: 'Fish hunter',
//   }
// ]
export default () => [
  {
    icon: 'home.png',
    route: '/home',
    title: 'Home',
  },
  {
    icon: 'sports.png',
    route: '',
    title: 'Games',
    level2:[
      {
        icon: 'slots.png',
        route: '',
        title: 'Slots',
        level3:[
          {
            icon: '',
            route: '/slots/pg',
            title: 'PG',
          },
          {
            icon: '',
            route: '/slots/playtech',
            title: 'Playtech',
          },
          {
            icon: '',
            route: '/slots/microgaming',
            title: 'Microgaming',
          },
          {
            icon: '',
            route: '/slots/joker',
            title: 'Joker',
          },
          {
            icon: '',
            route: '/gs/groups/asiagaming/types/slot/codes/unused',
            title: 'Asiagaming',
          },
          {
            icon: '',
            route: '/slots/pragmatic',
            title: 'Pragmatic',
          },
          {
            icon: '',
            route: '/slots/s1',
            title: '1S',
          },
          {
            icon: '',
            route: '/tg/groups/SBO/types/SBO/codes/CQ9',
            title: 'SBO',
          },
          {
            icon: '',
            route: '/slots/gameplay',
            title: 'Gameplay',
          }
        ]
      },
      {
        icon: 'casino.png',
        route: '/casino',
        title: 'Casino',
      },
      {
        icon: 'lottery.png',
        route: '/lottery',
        title: 'Lottery',
      },
      {
        icon: 'tangkas.png',
        route: '/tangkas',
        title: 'Tangkas',
      },
      {
        icon: 'fishhunter.png',
        route: '/fishhunter',
        title: 'Fish hunter',
      }
    ]
  },
  {
    icon: 'lottery.png',
    route: '/about-us',
    title: 'About Us',
  },
  {
    icon: 'lottery.png',
    route: '/term-condition',
    title: 'Term & Condition',
  },
  {
    icon: 'lottery.png',
    route: '/privacy',
    title: 'Privacy & Policy',
  },
  {
    icon: 'lottery.png',
    route: '/reposible',
    title: 'Resposible Gambling',
  },
  {
    icon: 'lottery.png',
    route: '/banking',
    title: 'Banking',
  },
  {
    icon: 'slots.png',
    route: '/contact',
    title: 'Contact Us',
  },
  {
    icon: 'lottery.png',
    route: '/faq',
    title: 'FAQ',
  }
  
]