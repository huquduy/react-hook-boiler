import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import Link from 'components/Link'
import TabPanel from 'components/TabPanel'
import { imageSrc } from 'config'
import GAMES, { getGameType, IProviderProps, SLOT_TAB } from 'constant/games'
import { AuthContext } from 'contexts/authContext'
import useLoading from 'hooks/loading'
import { map } from 'ramda'
import React, { useEffect, useMemo, useState } from 'react'
import MarqueeText from 'react-marquee-text-component'
import Carousel from 'react-slick'
import { get } from 'services/http'
import { carousels } from '../constant'
import { introDetail, introTitle } from '../content';
import '../style.scss'

const settingsCarousel = {
  autoplay: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 1000,
  swipeToSlide: true
};

const Home: React.FC = () => {
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
        isLogged ?
          <div className='authentication'>
            <Link className="register" href="/register">Register</Link>
            <Link className="login" href="/login">Login</Link>
          </div>
          :
          <div className='auth'>
            <Link className="register" href="/deposit">Deposit</Link>
            <Link className="transfer" href="/transfer">Transfer</Link>
            <Link className="login" href="/withdraw">Withdraw</Link>
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
            label={
              <div>
                <img className='game-type-icon' alt='hokibet188' src={`${imageSrc}icons/${idName.toLocaleLowerCase()}.png`} />
                <Typography variant="caption" display="block" gutterBottom={true}>
                  {idName}
                </Typography>
              </div>
            }
            value={idName}
          />, GAMES)}
        </Tabs>
        <TabPanel value={activeTab}>
          <Grid container={true} spacing={1}>
            {map(({ image, idName, route, target }: IProviderProps) =>
              <Grid item={true} xs={4} sm={4} key={idName}>
                <Link href={route} target={target}>
                  <Paper className='provider'>
                    <img className='logo' alt='hokibet188' src={`${imageSrc}providers/${image}`} />
                    <Typography variant="caption" display="block" gutterBottom={true}>
                      {idName}
                    </Typography>
                  </Paper>
                </Link>
              </Grid>
            , providers)}
          </Grid>
        </TabPanel>
      </div>
      {/* Text intro */}
      <div className="text-home">
        <ExpansionPanel key={1} expanded={expanded === '1'} onChange={handleChangeExpand('1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h1>{introTitle}</h1>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails key={1}>
            <div dangerouslySetInnerHTML={{ __html: introDetail }} />
          </ExpansionPanelDetails> 
        </ExpansionPanel>
      </div>
      <Bottom />
    </div>
  )
}

export default Home
