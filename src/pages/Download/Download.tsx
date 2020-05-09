import { Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import Link from 'components/Link'
import TabPanel from 'components/TabPanel'
import { imageSrc } from 'config'
import { AuthContext } from 'contexts/authContext'
import { map } from 'ramda'
import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import DOWNLOADTYPES, { getGameType, IDownloadProps, IGameTypeProps, PLAYTECH } from './constant'
import ProviderPassword from './ProviderPassword'
import './style.scss'

const Download: React.FC = () => {
  const { providerId = PLAYTECH } = useParams()
  const { auth } = React.useContext(AuthContext)
  const [activeTab, setActiveTab] = useState(providerId)

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
  };

  const { downloads, idName, url, prefix = '', suffix = '' }: IGameTypeProps = useMemo(() => getGameType(activeTab), [activeTab])

  return (
    <div className='download-page slot-page'>
      <Header />
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        MOBILE DOWNLOAD
      </Typography>
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
          {map(({ idName: providerName, image }) => <Tab
            key={providerName.toLowerCase()}
            label={
              <div>
                <img className='game-type-icon' alt='hokibet188' src={`${imageSrc}providers/${image}`} />
                <Typography variant="caption" display="block" gutterBottom={true}>
                  {providerName}
                </Typography>
              </div>
						}
            value={providerName.toLowerCase()}
          />, DOWNLOADTYPES)}
        </Tabs>
        <TabPanel value={activeTab}>
          <Grid container={true} spacing={1}>
            {map(({ image, route, title, version }: IDownloadProps) =>
              <Grid item={true} xs={4} sm={4} key={route + image} className="custom-block">
                <Paper className='provider'>
                  <Typography variant="caption" display="block" gutterBottom={true}>
                    {title}
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom={true}>
                    {version}
                  </Typography>
                  <img className='logo' alt='hokibet188' src={`${imageSrc}icons/${image}`} />
                </Paper>
                <Link className="btn-download" href={route} target='_blank'>
                  Download
                </Link>
              </Grid>
            , downloads)}
          </Grid>
          <Paper>
            <ProviderPassword
              url={url}
              username={prefix + auth.username + suffix}
              passwordDescription={`Pleasse choose password for ${idName}`}
              isShown={Boolean(url)}
            />
          </Paper>
        </TabPanel>
      </div>
      <Bottom />
    </div>
  )
}

export default Download

