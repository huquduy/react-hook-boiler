import { Grid, Paper, Tab, Tabs, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import TabPanel from 'components/TabPanel'
import { imageSrc } from 'config'
import GAMES, { getGameType, IProviderProps, SLOT_TAB } from 'constant/games'
import { AuthContext } from 'contexts/authContext'
import useLoading from 'hooks/loading'
import { map } from 'ramda'
import React, { useEffect, useMemo, useState } from 'react'
import MarqueeText from 'react-marquee-text-component'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import Carousel from 'react-slick'
import { get } from 'services/http'
import { carousels } from './constant'
import { intro } from './content';
import './style.scss'

const settingsCarousel = {
  autoplay: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 1000,
  swipeToSlide: true
};

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const { auth } = React.useContext(AuthContext)
  const [activeTab, setActiveTab] = useState(SLOT_TAB)
  const [runningText, setRunningText] = useState('')
  const isLogged = !auth.token.length
  const [, withLoading] = useLoading(false)
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
  };

  const handleChangeExpand = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  };

  useEffect(() => {
    const fetchText = async () => {
      const textString = await withLoading(() => get({
        path: 'runningText'
      }))
        .catch((err) => err)
      setRunningText(textString)
    }
    fetchText()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { providers }: { providers: IProviderProps[] } = useMemo(() => getGameType(activeTab), [activeTab])

  return (
    <div className='home-page'>
      <Header />

      {/* Carousel */}
      <Carousel {...settingsCarousel}>
        {
          map((item: string) =>
            <div key={item}>
              <img className='logo' alt='hokibet188' src={`${imageSrc}/home-carousel/${item}`} />
            </div>
            , carousels)
        }
      </Carousel>

      {/* Authentication functions */}
      {
        isLogged
          ? <div className='authentication'>
            <Link className="register" to="/register">Register</Link>
            <Link className="login" to="/login">Login</Link>
          </div>
          : <div className='auth'>
            <Link className="register" to="/deposit">Deposit</Link>
            <Link className="transfer" to="/transfer">Transfer</Link>
            <Link className="login" to="/withdraw">Withdraw</Link>
          </div>
      }
      <MarqueeText className="marquee" text={runningText} duration={30} repeat={2} />
      {/* Provider list */}
      <div className='game-tabs'>
        <Tabs
          className="custom_tab"
          value={activeTab}
          onChange={handleChangeTab}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="on"
        >
          {map(({ idName }: { idName: string }) => <Tab
            key={idName}
            label={<div>
              <img className='game-type-icon' alt='hokibet188' src={`${imageSrc}icons/${idName.toLocaleLowerCase()}.png`} />
              <Typography variant="caption" display="block" gutterBottom={true}>
                {idName}
              </Typography>
            </div>}
            value={idName}
          />, GAMES)}
        </Tabs>
        <TabPanel value={activeTab}>
          <Grid container={true} spacing={1}>
            {map(({ image, idName, route, target }: IProviderProps) =>
              <Grid item={true} xs={4} sm={4} key={idName}>
                <a href={route} target={target}>
                  <Paper className='provider'>
                    <img className='logo' alt='hokibet188' src={`${imageSrc}providers/${image}`} />
                    <Typography variant="caption" display="block" gutterBottom={true}>
                      {idName}
                    </Typography>
                  </Paper>
                </a>
              </Grid>
              , providers)}
          </Grid>
        </TabPanel>
      </div>
      {/* Text intro */}
      <div className="text-home">
      {map(({ id, title, content }) => <ExpansionPanel key={id} expanded={expanded === id} onChange={handleChangeExpand(id)}>
          <ExpansionPanelSummary aria-controls={id} id={id} key={id}>
            <h3>{title}</h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails key={id}>
            <p>{content}</p>
          </ExpansionPanelDetails> 
        </ExpansionPanel>, intro)}
      </div>
      {/* <div className="text-home">
        <h3>SITUS JUDI ONLINE DAN PERMAINAN CASINO TERPERCAYA</h3>
        <p>Hokibet188 adalah salah satu situs kasino online terpercaya di Indonesia. Berhasil memperoleh kepopuleran melalui penggabungan teknologi informasi terbaru dengan koleksi game-game online yang unik. Anda akan menikmati pengalaman bermain game Casino Online terbaik dan paling aman melalui kemitraan kami dengan sejumlah pemegang merk terkenal dan terbesar dalam industri games kasino online ini. Hokibet188 menawarkan berbagai pilihan permainan games online Sportbooks, Live Casino, Slots Game, 4D, Poker. Mainkan live game Baccarat, Blackjack, Roulette, Sic Bo,Poker dan masih banyak lagi dengan live dealer yang profesional langsung dari browser Anda dan rasakan pengalaman bermain game online terbaik</p>
        <h3>SLOT ONLINE TERPERCAYA DAN TERBAIK</h3>
        <p>Hokibet188 menyediakan permainan slot online Terbaik yang paling eksklusif kepada Anda. Mesin-mesin slots online yang disediakan tidak hanya menarik tapi juga terbaru guna memenuhi kebutuhan anda. Selain itu, Hokibet188 menawarkan hadiah yang tinggi dan beragam termasuk progresif jackpot sampai ratusan juta rupiah dan prosedur penarikan dana yang cepat dan mudah kepada Anda. Pemain bisa menikmati pilihan game slots yang beragam melalui perangkat lunak berteknologi tinggi serta standar-standar game yang telah mendapatkan sertifikasi Fair Play.</p>
        <h3>BANDAR JUDI BOLA SBOBET RESMI TERPERCAYA INDONESIA</h3>
        <p>Hokibet188 agen sbobet online paling terpercaya di Indonesia. Hokibet188  menjamin berapapun kemenangan member 100% di bayar penuh dengan proses wd yg sangat cepat support 24 jam. kami yang sudah memiliki reputasi tinggi di kalangan para Pemain Taruhan Bola Online terbesar. inilah alasan kenapa kami menyebut Hokibet188 agen sbobet terbesar & terbaik di indonesia.Baik untuk sbobet bola atau sbobet casino.</p>
      </div> */}
      <Bottom />
    </div>
  )
}

export default withRouter(Home)
