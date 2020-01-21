import { Button, ButtonGroup, Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import { imageSrc } from 'config'
import GAMES, { getGameType, IProviderProps, SLOT_TAB } from 'constant/games'
import { map } from 'ramda'
import React, {useMemo, useState} from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Carousel from 'react-slick'
import { carousels } from './constant'
import './style.scss'
import TabPanel from './TabPanel'

const settingsCarousel = {
  autoplay: true,
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 1000,
  swipeToSlide: true
};

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const [activeTab, setActiveTab] = useState(SLOT_TAB)

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
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
      <div className='authentication'>
        <ButtonGroup aria-label="contained primary button group">
          <Button variant="contained" color='secondary'>Register</Button>
          <Button variant="contained" color="primary">Login</Button>
        </ButtonGroup>
      </div>

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
      <Bottom history={history}/>
    </div>
  )
}

export default withRouter(Home)
