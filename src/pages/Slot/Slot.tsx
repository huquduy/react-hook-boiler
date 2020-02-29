import { Chip, Grid, InputAdornment, Paper, Tab, Tabs, TextField, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import TabPanel from 'components/TabPanel'
import { imageSrc } from 'config'
import { getGameType, IProviderProps, SLOT_TAB } from 'constant/games'
import { filter, map, reduce } from 'ramda'
import React, {useEffect, useMemo, useState} from 'react'
import { useHistory, useParams, withRouter } from 'react-router-dom'
import gamesByProvider, { IGames } from './constant'
import './style.scss'

const Home: React.FC = () => {
  const history = useHistory()
  const { providerId = SLOT_TAB } = useParams()
  const [freeSearch, setFreeSearch] = useState<string>('')
  const [activeGroup, setActiveGroup] = useState<string>('')
  const [gamesAvailable, setGamesAvailable] = useState<IGames[]>([])

  const { providers } : { providers: IProviderProps[] } = useMemo(() => getGameType(SLOT_TAB), [])

  const games = gamesByProvider[providerId]

  const handleFreeSearchChanged = e => setFreeSearch(e.target.value)

  const handleChangeProvider = (event: React.ChangeEvent<{}>, newValue: string) => {
    history.push(newValue);
  };

  const handleChangeGroup = (event: React.ChangeEvent<{}>, group: string) => {
    setActiveGroup(group);
  };

  const groups: string[] = useMemo(() => {
    const getGroup = (accumulator, { group = 'All' }) => {
      if (!accumulator.includes(group)) {
        accumulator.push(group)
      }
      return accumulator
    }
    return reduce(getGroup, [], games)
  }, [games])

  useEffect(() => {
    setActiveGroup(groups[0])
  }, [groups])

  useEffect(() => {
    const gameFiltered = filter(({ name, group }: IGames) => {
      const matchedGroup = group === activeGroup
      const validFreeSearch = name.toLocaleLowerCase().includes(freeSearch.toLocaleLowerCase())
      return matchedGroup && validFreeSearch
    }, games)
    setGamesAvailable(gameFiltered)
  }, [games, activeGroup, freeSearch])

  return (
    <div className='slot-page'>
      <Header/>

      {/* Provider list */}
      <div className='game-tabs'>
        <Tabs
          value={`slots/${providerId}`}
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

        {activeGroup.length && <Tabs
          value={activeGroup}
          onChange={handleChangeGroup}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="on"
        >
          {map((group: string) => <Tab
            key={group}
            label={<Chip color='primary' label={group} variant="outlined"/>}
            value={group} />, groups )}
        </Tabs>}

        <div className='game-search'>
          <TextField
            className='text-input-custom'
            onChange={handleFreeSearchChanged}
            InputProps={{
              startAdornment: (
                <InputAdornment position='end'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        
        <TabPanel value={activeGroup}>
          <Grid container={true} spacing={1}>
            {map(({ code, name, thumbnail }: IGames) => 
              <Grid item={true} xs={4} sm={4} key={code}>
                <Paper className='provider'>
                  <img className='logo' alt='hokibet188' src={thumbnail} />
                  <Typography variant="caption" display="block" gutterBottom={true}>
                    {name}
                  </Typography>
                </Paper>
              </Grid>
            , gamesAvailable)}
          </Grid>
        </TabPanel>
      </div>
      <Bottom />
    </div>
  )
}

export default withRouter(Home)
