export const PLAYTECH = 'Playtech Suite'
const ALLBET = 'AllBet Suite'
const GAMEPLAY = 'Gameplay Suite'
const MICROGAME = 'Microgaming Suite'
const FISH = 'Fish hunter Suite'
const IDN = 'IDN Poker Suite'
const FIGHT = 'Cock Fight'
const SSLOT = '1s Slot'

export interface IProviderProps {
    idName?: string;
    title?: string;
    version?: string;
    image: string;
    route: string;
    target?: string;
}

export interface IGameTypeProps {
    providers: IProviderProps[];
    idName: string;
    title: string;
}

const DOWNLOADTYPES = [
    {
        idName: PLAYTECH,
        providers: [
            {
                idName: '1',
                image: 'mobile_pc.png',
                route: '',
                title: 'PC',
                version: 'PC version'
            },
            {
                idName: '2',
                image: 'mobile_android.png',
                route: 'http://mlive.gsoft888.com',
                title: 'LIVE CASINO',
                version: 'Android version',

            },
            {
                idName: '3',
                image: 'mobile_android.png',
                route: 'http://mgames.gsoft888.com',
                title: 'SLOTS',
                version: 'Android version',
                
            }
        ],
        title: 'PLAYTECH'
    },
    {
        idName: ALLBET,
        providers: [
            {
                idName: '4',
                image: 'mobile_android.png',
                route: 'https://www.abgapp88.net/',
                target: '_blank',
                title: 'LIVE CASINO',
                version: 'Android version',
            },
            {
                idName: '5',
                image: 'mobile_ios.jpg',
                route: 'https://www.abgapp88.net/',
                target: '_blank',
                title: 'LIVE CASINO',
                version: 'IOS version',
            }
        ],
        title: 'ALLBET'
    },
    {
        idName: GAMEPLAY,
        providers: [
            {
                idName: '6',
                image: 'mobile_android.png',
                route: 'http://casino.gpiops.com/mob/download.html?op=hokibet188',
                target: '_blank',
                title: 'LIVE CASINO',
                version: 'Android version',
            }
        ],
        title: 'GAMEPLAY'
    },
    {
        idName: MICROGAME,
        providers: [
            {
                idName: '7',
                image: 'mobile_android.png',
                route: 'https://drive.google.com/file/d/1IZDCEXawj5W7TUCOlSsM8eXVgTYkubp4/view?usp=sharing',
                target: '_blank',
                title: 'SLOTS',
                version: 'Android version',
            }

        ],
        title: 'GAMEPLAY'
    },
    {
        idName: FISH,
        providers: [
            {
                idName: '8',
                image: 'mobile_android.png',
                route: '/https://dl.gg626.com/iOS/public/download.html',
                target: '_blank',
                title: 'SLOTS',
                version: 'Android version',
            }

        ],
        title: 'FISH'
    },
    {
        idName: IDN,
        providers: [
            {
                idName: '9',
                image: 'mobile_android.png',
                route: 'http://www.ios88app.com/android/poker.apk',
                target: '_blank',
                title: '',
                version: 'Android version',
            },
            {
                idName: '10',
                image: 'mobile_ios.jpg',
                route: 'https://www.gameiosapk.com/iphone.php',
                target: '_blank',
                title: '',
                version: 'IOS version',
            
            }
        ],
        title: 'IDN'
    },
    {
        idName: FIGHT,
        providers: [
            {
                idName: '11',
                image: 'mobile_android.png',
                route: 'http://www3.hs8416.com/Mobile/Download.aspx',
                target: '_blank',
                title: '',
                version: 'Android version',
            },
            {
                idName: '12',
                image: 'mobile_ios.jpg',
                route: 'http://www3.hs8416.com/Mobile/Download.aspx',
                target: '_blank',
                title: '',
                version: 'IOS version',
            }
        ],
        title: 'FIGHT'
    },
    {
        idName: SSLOT,
        providers: [
            {
                idName: '',
                image: 'mobile_android.png',
                route: 'https://www.1sgames88.com/android/download.htm',
                target: '_blank',
                title: '',
                version: 'Android version',
            },
            {
                idName: '',
                image: 'mobile_android.png',
                route: 'itms-services://?action=download-manifest&amp;url=https://www.1sgames88.com/mobileservice/app/ios/plist',
                target: '_blank',
                title: '',
                version: 'IOS version',
            }
        ],
        title: 'SSLOT'
    },
]

export default DOWNLOADTYPES;

export const getGameType = (type: string) =>
DOWNLOADTYPES.find(({ idName }: { idName: string }) =>
        idName.toLocaleLowerCase() === type.toLocaleLowerCase()) || { providers: [], idName: null }