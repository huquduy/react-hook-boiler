import { Grid, Paper, Typography } from '@material-ui/core'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import { imageSrc } from 'config'
import { getGameType, IProviderProps, SLOT_TAB } from 'constant/games'
import { map } from 'ramda'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './style.scss'

const Games: React.FC = () => {
  const { type = SLOT_TAB } = useParams()
  const { providers: selectedProvider } = getGameType(type)

  return (
    <div className='games-page'>
      <Header/>
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        {type.toLocaleUpperCase()}
      </Typography>

      {/* Provider list */}
      <div className='container'>
        <Grid container={true} spacing={1}>
          {map(({ image, idName, route }: IProviderProps) => 
            <Grid item={true} xs={6} sm={6} key={idName}>
              <Link to={route}>
                <Paper className='provider'>
                  <img className='logo' alt='hokibet188' src={`${imageSrc}providers/${image}`} />
                  <Typography variant="caption" display="block" gutterBottom={true}>
                    {idName}
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          , selectedProvider)}
        </Grid>
      </div>
      <Bottom />
    </div>
  )
}

export default Games
