import {
    Divider,
    List,
    ListItem,
    Typography
} from '@material-ui/core'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import { map } from 'ramda'
import React from 'react'
import { Link} from 'react-router-dom'
import MOREPAGE from './constant'

const MorePage: React.FC = () => {
    return (
        <div className='more-page'>
            <Header />
            <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
               Information
            </Typography>
            <List>
                {map(({ title, route, icon }) => (
                    <React.Fragment key={title}>
                        <ListItem button={true} key={title} >
                            <Link to={route} className='item'>
                                <span style={{ color: '#efd77f', display: 'block' }}>{title}</span>
                            </Link>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ), MOREPAGE())}
                <Divider />
            </List>
            <Bottom />
        </div>
    )
}

export default MorePage