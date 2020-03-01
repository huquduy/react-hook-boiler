import {
  Divider,
  List,
  ListItem
} from '@material-ui/core'
import { imageSrc } from 'config'
import { map } from 'ramda'
import React from 'react'
import { Link }from 'react-router-dom'
import SIDEBAR from './constant'
import './style.scss'



const sidebar: React.FC= () => {
  // const handleMore = () =>{
   
  // }
  return (
    <div className='drawer'>
      <List>
        {map(({ title, route, icon }) => (
          <React.Fragment key={title}>
            <ListItem button={true} key={title} >
              <Link to={route} className='item'>
                {<img alt='hokibet188' style={{ width: 40 }} src={`${imageSrc}/icons/${icon}`} />}
                <span style={{ color: '#fff', display: 'block' }}>{title}</span>
              </Link>
            </ListItem>
            <Divider />
          </React.Fragment>
        ), SIDEBAR())}
        <Divider />
         <ListItem button={true}>
         <Link to={'/more-page'} className='item'>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <img alt="hokibet188" style={{ width: 40 }} src={`${imageSrc}/icons/more_horiz.svg`} />
                <span style={{ color: '#fff', display: 'block' }}>More</span>
              </div>
              </Link>
            </ListItem>
      </List>
    </div>
  )
}

export default sidebar