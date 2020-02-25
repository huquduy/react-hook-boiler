import { Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import TabPanel from 'components/TabPanel'
import { imageSrc } from 'config'
import { getGameType, IProviderProps, SLOT_TAB } from 'constant/games'
import { map } from 'ramda'
import React, {useMemo, useState} from 'react'
import { Link, RouteComponentProps, useParams, withRouter } from 'react-router-dom'
import gamesByProvider, { IGames } from './constant'
import './style.scss'

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const { providerId = SLOT_TAB } = useParams()
  const games = gamesByProvider[providerId]
  const [activeTab, setActiveTab] = useState(SLOT_TAB)

  const handleChangeProvider = (event: React.ChangeEvent<{}>, newValue: string) => {
    history.push(newValue);
  };

  const { providers } : { providers: IProviderProps[] } = useMemo(() => getGameType(SLOT_TAB), [])

  return (
    <div className='slot-page'>
      <Header/>

      {/* Provider list */}
      <div className='game-tabs'>
        <Tabs
          value={activeTab}
          onChange={handleChangeProvider}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="on"
        >
          {map(({ idName, image, route }: IProviderProps) => <Tab
            key={idName}
            label={<div>
              <img className='game-type-icon' alt='hokibet188' src={`${imageSrc}providers/${image}`} />
              <Typography variant="caption" display="block" gutterBottom={true}>
                {idName}
              </Typography>
            </div>} value={route} />, providers )}
        </Tabs>
        <TabPanel value={activeTab}>
          <Grid container={true} spacing={1}>
            {map(({ code, name, thumbnail }: IGames) => 
              <Grid item={true} xs={6} sm={6} key={code}>
                <Paper className='provider'>
                  <img className='logo' alt='hokibet188' src={thumbnail} />
                  <Typography variant="caption" display="block" gutterBottom={true}>
                    {name}
                  </Typography>
                </Paper>
              </Grid>
            , games)}
          </Grid>
        </TabPanel>
      </div>
      <Bottom />
    </div>
  )
}

export default withRouter(Home)
