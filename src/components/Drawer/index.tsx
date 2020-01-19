import {
  Divider,
  List,
  ListItem
} from '@material-ui/core'
import { imageSrc } from 'config'
import { map } from 'ramda'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
// import store from 'store'
import './style.scss'

const SIDEBAR = () => [
  {
    icon: 'deposit.png',
    route: 'topup',
    title: 'Deposit',
  },
  {
    icon: 'withdraw.png',
    route: 'withdraw',
    title: 'Withdraw',
  },
  {
    icon: 'sports.png',
    route: 'sports',
    title: 'Sports',
  },
  {
    icon: 'casino.png',
    route: 'casino',
    title: 'Casino',
  },
  {
    icon: 'slots.png',
    route: 'slot',
    title: 'Slots',
  },
  {
    icon: 'lottery.png',
    route: 'lottery',
    title: 'Lottery',
  },
]

const sidebar: React.FC = () => {

  // const handleChangeRoute = () => history.push
  return (
    <div className='drawer'>
      <List>
        {map(({ title, route, icon }) => (
          <React.Fragment key={title}>
            <ListItem button={true} key={title} >
              <div style={{textAlign: 'center', width: '100%'}}>
                {<img alt='hokibet188' style={{width: 40}} src={`${imageSrc}/icons/${icon}`} />}
                <span style={{color: '#fff', display: 'block'}}>{title}</span>
              </div>
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