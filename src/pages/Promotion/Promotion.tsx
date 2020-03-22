import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography
} from '@material-ui/core'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import { imageSrc } from 'config'
import { map } from 'ramda'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { promotions } from './constants';
import './style.scss'


const Promotion: React.FC<RouteComponentProps> = ({ history }) => {
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
                {map(({ id, name, image, content }) => <ExpansionPanel key={id} expanded={expanded === id} onChange={handleChange(id)} >
                    <ExpansionPanelSummary aria-controls={id} id={id} key={id}>
                       <img className='game-type-icon' alt='hokibet188' src={`${imageSrc}promo/${image}`} />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails key={id}>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </ExpansionPanelDetails> </ExpansionPanel>, promotions)}
            </div>
            <Bottom />
        </div>

    )
}

export default withRouter(Promotion)
