import {
    Typography
} from '@material-ui/core'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import { imageSrc } from 'config'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import './style.scss'


const Contact: React.FC<RouteComponentProps> = ({ history }) => {
    return (
        <div className='term-page'>
   
            <Header />
            <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
                CONTACT US
          </Typography>
            <div className="container">
            <h4>CONTACT US</h4>
          <table className="table table-contact">
             <tbody>
             <tr>
                 <td>WA</td>
                 <td>+855883071618</td>
             </tr>
             <tr>
                 <td>BBM</td>
                 <td>7AD69275</td>
             </tr>
             <tr>
                 <td>Wechat</td>
                 <td>Hokibet188</td>
             </tr>
             </tbody>
        </table>
        <h4>FOLLOWS</h4>
        <ul>
            <li><a href="https://www.facebook.com/Hokibet188live-1109599625879678"><img className='game-type-icon' alt='hokibet188' src={`${imageSrc}icons/connect_fb.jpg`} /></a></li>
            <li><a href="http://www.beritagoll.com/"><img className='game-type-icon' alt='hokibet188' src={`${imageSrc}icons/connect_blog.jpg`} /></a></li>
            <li><a href="https://www.instagram.com/hokibet188live/"><img className='game-type-icon' alt='hokibet188' src={`${imageSrc}icons/INSTAGRAM_PNG.png`} /></a></li>
        </ul>
            </div>
            <Bottom />
        </div>

    )
}

export default withRouter(Contact)
