import { Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import TabPanel from 'components/TabPanel'
import { imageSrc } from 'config'
import GAMES, { getGameType, IProviderProps, SLOT_TAB } from 'constant/games'
import { AuthContext } from "contexts/authContext"
import useLoading from 'hooks/loading'
import { map } from 'ramda'
import React, {useEffect, useMemo, useState} from 'react'
import MarqueeText from 'react-marquee-text-component'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import Carousel from 'react-slick'
import { get } from 'services/http'
import { carousels } from './constant'
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

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
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
  },[])

  const { providers } : { providers: IProviderProps[] } = useMemo(() => getGameType(activeTab), [activeTab])

  return (
    <div className='home-page'>
      <Header/>

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
        : <div className='authentication'>
        <Link className="register" to="/deposit">Deposit</Link>
        <Link className="login" to="/withdraw">Withdraw</Link>
      </div>
      }
      <MarqueeText className="marquee" text={runningText} duration={30} repeat={1}/>
      {/* Provider list */}
      <div className='game-tabs'>
        <Tabs className="custom_tab"
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
            </div>} value={idName} />, GAMES )}
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
      <Bottom />
    </div>
  )
}

export default withRouter(Home)
