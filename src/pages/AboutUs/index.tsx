import {
  Typography
} from '@material-ui/core'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import './style.scss';


const AboutUs: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <div className='term-page'>
      <Header />
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        ABOUT US
      </Typography>
      <div className="container">
        <h1>Selamat Datang Di HOKIBET188.com</h1>
        <h2>SITUS JUDI ONLINE DAN PERMAINAN CASINO TERPERCAYA</h2>
        <p>Hokibet188 adalah salah satu situs kasino online terpercaya di Indonesia. Berhasil memperoleh kepopuleran melalui penggabungan teknologi informasi terbaru dengan koleksi game-game online yang unik. Anda akan menikmati pengalaman bermain game Casino Online terbaik dan paling aman melalui kemitraan kami dengan sejumlah pemegang merk terkenal dan terbesar dalam industri games kasino online ini. Hokibet188 menawarkan berbagai pilihan permainan games online Sportbooks, Live Casino, Slots Game, 4D, Poker. Mainkan live game Baccarat, Blackjack, Roulette, Sic Bo,Poker dan masih banyak lagi dengan live dealer yang profesional langsung dari browser Anda dan rasakan pengalaman bermain game online terbaik</p>
        <h3>SLOT ONLINE TERPERCAYA DAN TERBAIK</h3>
        <p >Hokibet188 menyediakan permainan slot online Terbaik yang paling eksklusif kepada Anda. Mesin-mesin slots online yang disediakan tidak hanya menarik tapi juga terbaru guna memenuhi kebutuhan anda. Selain itu, Hokibet188 menawarkan hadiah yang tinggi dan beragam termasuk progresif jackpot sampai ratusan juta rupiah dan prosedur penarikan dana yang cepat dan mudah kepada Anda. Pemain bisa menikmati pilihan game slots yang beragam melalui perangkat lunak berteknologi tinggi serta standar-standar game yang telah mendapatkan sertifikasi Fair Play.</p>
        <h3>BANDAR JUDI BOLA SBOBET RESMI TERPERCAYA INDONESIA</h3>
        <p>Hokibet188 agen sbobet online paling terpercaya di Indonesia.Hokibet188 menjamin berapapun kemenangan member 100% di bayar penuh dengan proses wd yg sangat cepat support 24 jam. kami yang sudah memiliki reputasi tinggi di kalangan para Pemain Taruhan Bola Online terbesar. inilah alasan kenapa kami menyebut Hokibet188 agen sbobet terbesar &amp; terbaik di indonesia.Baik untuk sbobet bola atau sbobet casino.</p>
      </div>
      <Bottom />
    </div>
  )
}

export default withRouter(AboutUs)
