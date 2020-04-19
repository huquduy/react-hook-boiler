export const PLAYTECH = 'Playtech'
const ALLBET = 'AllBet'
const GAMEPLAY = 'Gameplay'
const MICROGAME = 'Microgaming'
const FISH = 'Fish hunter'
const IDN = 'IDN Poker'
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
	url?: string;
	username?: string;
	inforText?: string;
	showForm?: boolean;
}

const DOWNLOADTYPES = [
	{
		idName: PLAYTECH,
		image: 'slots/playtech.png',
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
		title: 'PLAYTECH',
		url: 'playtech/password/update',
		infoText: 'Pleasse choose password for PlayTech',
		username: 'tester@HOKI',
		showForm: true
	},
	{
		idName: ALLBET,
		image: 'casinos/allbet.png',
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
		title: 'ALLBET',
		url: 'allbet/password/update',
		infoText: 'Pleasse choose password for AllBet',
		username: 'testervh1',
		showForm: true
	},
	{
		idName: GAMEPLAY,
		image: 'casinos/gameplay.png',
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
		image: 'casinos/microgaming.png',
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
		title: 'MICROGAME',
		url: 'microgaming/password/update',
		infoText: 'Pleasse choose password for Microgaming',
		username: 'hoki_tester',
		showForm: true
	},
	{
		idName: FISH,
		image: 'fishhunter/playtech.png',
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
		title: 'FISH',
		url: 'fishhunter/password/update',
		infoText: 'Pleasse choose password for Fish hunter',
		username: 'tester@TCGSA',
		showForm: true
	},
	{
		idName: IDN,
		image: 'poker/idn.png',
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
		title: 'IDN',
		url: 'idn/password/update',
		infoText: 'Pleasse choose password for IDN',
		username: 'BPAER7p',
		showForm: true
	},
	{
		idName: FIGHT,
		image: 'cockfight/cockfight.png',
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
		title: 'FIGHT',
		showForm: false
	},
	{
		idName: SSLOT,
		image: 'slots/1s.png',
		providers: [
			{
				idName: '13',
				image: 'mobile_android.png',
				route: 'https://www.1sgames88.com/android/download.htm',
				target: '_blank',
				title: '',
				version: 'Android version',
			},
			{
				idName: '14',
				image: 'mobile_android.png',
				route: 'itms-services://?action=download-manifest&amp;url=https://www.1sgames88.com/mobileservice/app/ios/plist',
				target: '_blank',
				title: '',
				version: 'IOS version',
			}
		],
		title: 'SSLOT',
		username: 'tester@hokiid',
		showForm: true
	},
]

export default DOWNLOADTYPES;

export const getGameType = (type: string) =>
	DOWNLOADTYPES.find(({ idName }: { idName: string }) =>
		idName.toLocaleLowerCase() === type.toLocaleLowerCase()) || { providers: [], idName: null }