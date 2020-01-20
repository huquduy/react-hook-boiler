import {
  Divider,
  List,
  ListItem
} from '@material-ui/core'
import { imageSrc } from 'config'
import { map } from 'ramda'
import React from 'react'
import { Link } from 'react-router-dom'
// import store from 'store'
import SIDEBAR from './constant'
import './style.scss'

const sidebar: React.FC = () => {
  return (
    <div className='drawer'>
      <List>
        {map(({ title, route, icon }) => (
          <React.Fragment key={title}>
            <ListItem button={true} key={title} >
              <Link to={route} className='item'>
                {<img alt='hokibet188' style={{width: 40}} src={`${imageSrc}/icons/${icon}`} />}
                <span style={{color: '#fff', display: 'block'}}>{title}</span>
              </Link>
            </ListItem>
            <Divider />
          </React.Fragment>
        ), SIDEBAR())}
        {/* <ListItem button={true} onClick={handleClickOpenLangModal}>
          <div style={{textAlign: 'center', width: '100%'}}>
            <img style={{width: 40}} src={`${process.env.PUBLIC_URL}/icon/lang_icon.png`} />
            <span style={{color: '#fff', display: 'block'}}>{t('LANGS')}</span>
          </div>
        </ListItem>
        <Divider />
        <ListItem button={true} onClick={() => { history.push('/'); store.clearAll()}}>
          <div style={{textAlign: 'center', width: '100%'}}>
            <img style={{width: 40}} src={`${process.env.PUBLIC_URL}/icon/icon-logout.svg`} />
            <span style={{color: '#fff', display: 'block'}}>{t('LOGOUT')}</span>
          </div>
        </ListItem> */}
      </List>
    </div>
  )
}

export default sidebar