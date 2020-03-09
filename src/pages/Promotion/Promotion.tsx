import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography
} from '@material-ui/core'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import { imageSrc } from 'config'
import { AuthContext } from "contexts/authContext"
import { map } from 'ramda'
import React, { useEffect, useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { promotions } from './constants';
import './style.scss'


const Promotion: React.FC<RouteComponentProps> = ({ history }) => {
    const { auth } = React.useContext(AuthContext)
    const [expanded, setExpanded] = React.useState<string | false>(false)

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false)
    };
    return (
        <div className='promotion-page'>
            <Header />
            <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
                PROMOTION
          </Typography>
            <div className="container">
                {map(({ id, name, image, content }) => <ExpansionPanel expanded={expanded === id} onChange={handleChange(id)} >
                    <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                       <img className='game-type-icon' alt='hokibet188' src={`${imageSrc}promo/${image}`} />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </ExpansionPanelDetails> </ExpansionPanel>, promotions)}
            </div>
            <Bottom />
        </div>

    )
}

export default withRouter(Promotion)
