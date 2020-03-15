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
        icon: 'sports.png',
        route: '/sports',
        title: 'Con',
        level3:[
          {
            icon: 'sports.png',
            route: '/sports',
            title: 'Chau',
          }]
      },
      {
        icon: 'casino.png',
        route: '/casino',
        title: 'Casino',
      },
      {
        icon: 'slots.png',
        route: '/slots/joker',
        title: 'Slots',
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
    title: 'ABOUT US',
  },
  {
    icon: 'lottery.png',
    route: '/term-condition',
    title: 'TERM & CONDITION',
  },
  {
    icon: 'lottery.png',
    route: '/privacy',
    title: 'PRIVACY & POLICY',
  },
  {
    icon: 'lottery.png',
    route: '/reposible',
    title: 'RESPOSIBLE GAMBLING',
  },
  {
    icon: 'lottery.png',
    route: '/banking',
    title: 'BANKING',
  },
  {
    icon: 'slots.png',
    route: '/contact',
    title: 'CONTACT US',
  },
  {
    icon: 'lottery.png',
    route: '/faq',
    title: 'FAQ',
  }
  
]