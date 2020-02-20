import { Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import { imageSrc } from 'config'
import GAMES, { getGameType, IProviderProps, SLOT_TAB } from 'constant/games'
import { AuthContext } from "contexts/authContext"
import useDialog from 'hooks/dialog'
import { map } from 'ramda'
import React, {useMemo, useState} from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import Carousel from 'react-slick'
import { carousels } from './constant'
import './style.scss'
import TabPanel from './TabPanel'

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
  const [showDialog, DialogComponent] = useDialog(false)
  const isLogged = !auth.token.length

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
    showDialog()
  };

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
        : null
      }

      {/* Provider list */}
      <div className='game-tabs'>
        <Tabs
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
            {map(({ image, idName }: IProviderProps) => 
              <Grid item={true} xs={4} sm={4} key={idName}>
                <Paper className='provider'>
                  <img className='logo' alt='hokibet188' src={`${imageSrc}provider-photo/${image}`} />
                  <Typography variant="caption" display="block" gutterBottom={true}>
                    {idName}
                  </Typography>
                </Paper>
              </Grid>
            , providers)}
          </Grid>
        </TabPanel>
      </div>
      <DialogComponent title='test'>
        <div>Here is your content given ....</div>
      </DialogComponent>
      <Bottom />
    </div>
  )
}

export default withRouter(Home)
