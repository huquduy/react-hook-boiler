import { Chip, Grid, IconButton, InputAdornment, Paper, Tab, Tabs, TextField, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import Link from 'components/Link'
import TabPanel from 'components/TabPanel'
import { imageSrc } from 'config'
import { getGameType, IProviderProps, SLOT_TAB } from 'constant/games'
import { filter, map, reduce } from 'ramda'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ReactImageFallback from 'react-image-fallback'
import { useParams, withRouter } from 'react-router-dom'
import gamesByProvider, { IGames } from './constant'
import './style.scss'

const Home: React.FC = () => {
  const { providerId = SLOT_TAB } = useParams()
  const [searchingShown, setSearchingShown] = useState<boolean>(false)
  const [freeSearch, setFreeSearch] = useState<string>('')
  const [activeGroup, setActiveGroup] = useState<string>('')
  const [gamesAvailable, setGamesAvailable] = useState<IGames[]>([])

  const genarateLoginPage = (type: string, code: string) => {
    const proxies = {
      gameplay: `/gs/groups/gameplay/types/slots/codes/${code}`,
      joker: `/tg/groups/JOKER/types/SLOTS/codes/${code}`,
      microgaming: `/gs/groups/microgaming/types/SL/codes/${code}`,
      pg: `/tg/groups/PGSOFT/types/SLOTS/codes/${code}`,
      playtech: `/gs/groups/playtech/types/SL/codes/${code}`,
      pragmatic: `/tg/groups/PP/types/SLOTS/codes/${code}`,
      s1: `/tg/groups/s1/types/SLOTS/codes/${code}`,
    }
    if (proxies[type]) {
      return proxies[type]
    }
    return ''
  }

  const { providers } : { providers: IProviderProps[] } = useMemo(() => getGameType(SLOT_TAB), [])

  const toogleSearching = useCallback(() => setSearchingShown(!searchingShown), [searchingShown])

  const games = gamesByProvider[providerId]

  const handleFreeSearchChanged = useCallback(e => setFreeSearch(e.target.value), [])

  const handleChangeGroup = useCallback((event: React.ChangeEvent<{}>, group: string) => {
    setActiveGroup(group)
    setFreeSearch('')
  }, [])

  const groups: string[] = useMemo(() => {
    const getGroup = (accumulator: string[], { group = 'All' }: {group: string}) => {
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
      <Header />

      {/* Provider list */}
      <div className='game-tabs'>
        <Tabs
          value={`/slots/${providerId}`}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="on"
        >
          {map(({ idName, image, route, target }: IProviderProps) => <Tab
            key={idName}
            label={
              <Link href={route} target={target}>
                <img className='game-type-icon' alt='hokibet188' src={`${imageSrc}providers/${image}`} />
                <Typography variant="caption" display="block" gutterBottom={true}>
                  {idName}
                </Typography>
              </Link>
              }
            value={route}
          />, providers )}
        </Tabs>
        
        <div className='group'>
          {activeGroup.length &&
            <Tabs
              value={activeGroup}
              onChange={handleChangeGroup}
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="on"
            >
              {map((group: string) => <Tab
                key={group}
                label={<Chip color='primary' label={group} variant="outlined" />}
                value={group}
              />, groups )}
            </Tabs>}
          <IconButton onClick={toogleSearching} color='primary' className='toogle-search'>
            <SearchIcon />
          </IconButton>
        </div>

        {searchingShown &&
        <div className='game-search'>
          <TextField
            label='Search games'
            className='text-input-custom'
            onChange={handleFreeSearchChanged}
            value={freeSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position='end'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>}
        
        <TabPanel value={activeGroup}>
          <Grid container={true} spacing={1}>
            {map(({ code, name, thumbnail, linkGame }: IGames) => 
              <Grid item={true} xs={4} sm={4} key={code}>
                <Link href={genarateLoginPage(providerId, code)} target="_blank">
                  <Paper className={`provider ${providerId}`}>
                    <ReactImageFallback
                      fallbackImage='/images/404.jpg'
                      className='game'
                      alt='hokibet188'
                      src={thumbnail}
                    />
                    <Typography variant="caption" display="block" gutterBottom={true}>
                      {name}
                    </Typography>
                  </Paper>
                </Link>
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
