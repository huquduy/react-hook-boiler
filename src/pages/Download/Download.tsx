import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import TabPanel from 'components/TabPanel'
import { imageSrc } from 'config'
import { AuthContext } from 'contexts/authContext'
import useLoading from 'hooks/loading'
import { map } from 'ramda'
import React, { useEffect, useMemo, useState } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { get } from 'services/http'
import DOWNLOADTYPES, { getGameType, IProviderProps, PLAYTECH } from './constant'
import './style.scss'


const Download: React.FC<RouteComponentProps> = ({ history }) => {
    const { auth } = React.useContext(AuthContext)
    const [activeTab, setActiveTab] = useState(PLAYTECH)
    const isLogged = !auth.token.length
    const [, withLoading] = useLoading(false)

    const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: string) => {
        setActiveTab(newValue);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { providers }: { providers: IProviderProps[] } = useMemo(() => getGameType(activeTab), [activeTab])

    return (
        <div className='download-page'>
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
                    {map(({ idName }: { idName: string }) => <Tab
                        key={idName}
                        label={<div>
                            <img className='game-type-icon' alt='hokibet188' src={`${imageSrc}icons/download.png`} />
                            <Typography variant="caption" display="block" gutterBottom={true}>
                                {idName}
                            </Typography>
                        </div>}
                        value={idName}
                    />, DOWNLOADTYPES)}
                </Tabs>
                <TabPanel value={activeTab}>
                    <Grid container={true} spacing={1}>
                        {map(({ image, idName, route, target, title, version }: IProviderProps) =>
                            <Grid item={true} xs={4} sm={4} key={idName}>
                                <Paper className='provider'>
                                    <Typography variant="caption" display="block" gutterBottom={true}>
                                        {title}
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom={true}>
                                        {version}
                                    </Typography>
                                    <img className='logo' alt='hokibet188' src={`${imageSrc}icons/${image}`} />
                                </Paper>
                                <a href={route} target={target}>
                                    Download
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

export default withRouter(Download)
