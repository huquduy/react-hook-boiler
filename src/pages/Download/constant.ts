export const PLAYTECH = 'Playtech'
const ALLBET = 'AllBet'
const GAMEPLAY = 'Gameplay'
const MICROGAME = 'Microgaming'
const FISH = 'Fishhunter'
const IDN = 'IDNPoker'
const FIGHT = 'Cockfight'
const S1LOT = '1s'

export interface IDownloadProps {
  title?: string;
  version?: string;
  image: string;
  route: string;
}

export interface IGameTypeProps {
  downloads: IDownloadProps[];
  idName: string;
  url?: string;
  suffix?: string;
  prefix?: string;
}

const DOWNLOADTYPES = [
  {
    downloads: [
      {
        image: 'android.png',
        route: 'http://mlive.gsoft888.com',
        title: 'LIVE CASINO',
        version: 'Android version',
      },
      {
        image: 'android.png',
        route: 'http://mgames.gsoft888.com',
        title: 'SLOTS',
        version: 'Android version',
      }
    ],
    idName: PLAYTECH,
    image: 'slots/playtech.png',
    suffix: '@HOKI',
    title: 'PLAYTECH',
    url: 'playtech/password/update',
  },
  {
    downloads: [
      {
        image: 'android.png',
        route: 'https://www.1sgames88.com/android/download.htm',
        title: '',
        version: 'Android version',
      },
      {
        image: 'ios.png',
        route: 'itms-services://?action=download-manifest&amp;url=https://www.1sgames88.com/mobileservice/app/ios/plist',
        title: '',
        version: 'IOS version',
      }
    ],
    idName: S1LOT,
    image: 'slots/1s.png',
    suffix: '@hokiid',
  },
  {
    downloads: [
      {
        image: 'android.png',
        route: 'http://casino.gpiops.com/mob/download.html?op=hokibet188',
        title: 'LIVE CASINO',
        version: 'Android version',
      }
    ],
    idName: GAMEPLAY,
    image: 'casinos/gameplay.png',
  },
  {
    downloads: [
      {
        image: 'android.png',
        route: 'https://drive.google.com/file/d/1IZDCEXawj5W7TUCOlSsM8eXVgTYkubp4/view?usp=sharing',
        title: 'SLOTS',
        version: 'Android version',
      }
    ],
    idName: MICROGAME,
    image: 'casinos/microgaming.png',
    prefix: 'hoki_',
    url: 'microgaming/password/update',
  },
  {
    downloads: [
      {
        image: 'android.png',
        route: '/https://dl.gg626.com/iOS/public/download.html',
        title: 'SLOTS',
        version: 'Android version',
      }

    ],
    idName: FISH,
    image: 'fishhunter/playtech.png',
    suffix: '@TCGSA',
    url: 'fishhunter/password/update',
  },
  {
    downloads: [
      {
        image: 'android.png',
        route: 'http://www.ios88app.com/android/poker.apk',
        title: '',
        version: 'Android version',
      },
      {
        image: 'ios.png',
        route: 'https://www.gameiosapk.com/iphone.php',
        title: '',
        version: 'IOS version',

      }
    ],
    idName: IDN,
    image: 'poker/idn.png',
    prefix: 'hoki',
    url: 'idn/password/update'
  },
  {
    downloads: [
      {
        image: 'android.png',
        route: 'http://www3.hs8416.com/Mobile/Download.aspx',
        title: '',
        version: 'Android version',
      },
      {
        image: 'ios.png',
        route: 'http://www3.hs8416.com/Mobile/Download.aspx',
        title: '',
        version: 'IOS version',
      }
    ],
    idName: FIGHT,
    image: 'cockfight/cockfight.png',
  },
  {
    downloads: [
      {
        image: 'android.png',
        route: 'https://www.abgapp88.net/',
        title: 'LIVE CASINO',
        version: 'Android version',
      },
      {
        image: 'ios.png',
        route: 'https://www.abgapp88.net/',
        title: 'LIVE CASINO',
        version: 'IOS version',
      }
    ],
    idName: ALLBET,
    image: 'casinos/allbet.png',
    suffix: 'vh1',
    url: 'allbet/password/update',
  },
]

export default DOWNLOADTYPES;

export const getGameType = (type: string) =>
  DOWNLOADTYPES.find(({ idName }: { idName: string }) =>
    idName.toLocaleLowerCase() === type.toLocaleLowerCase()) || DOWNLOADTYPES[0]