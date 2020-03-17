//NEW
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { ExpandLess, ExpandMore, } from '@material-ui/icons'
import { imageSrc } from 'config'
import { map } from 'ramda'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SIDEBAR from './constant'
import './style.scss'

const Sidebar: React.FC = () => {

  const MenuItem = ({ title, route, icon, items }) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(!open);
    };
    return (
      <List>
        {!items ? <div>
        </div> :
          <div>
            <ListItem button={true} onClick={handleClickOpen} key={title}>
              {route ?
                <Link to={route} className='item'>
                  <span style={{ color: '#fff', display: 'block' }}>{title}</span>
                </Link>
                :
                <Typography variant="caption" display="block" gutterBottom={true}>
                  <span style={{ color: '#fff', display: 'block' }}>
                    {icon ? <img alt='hokibet188' style={{ width: 15 }} src={`${imageSrc}/icons/${icon}`} />: null}
                    {title}</span>
                </Typography>}
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {map((item) => (
                  <div>
                    {!item.level3 ? <ListItem button>
                      <Link to={item.route} className='item'>
                        <span style={{ color: '#fff', display: 'block' }}>
                         {item.icon ?  <img alt='hokibet188' style={{ width: 15 }} src={`${imageSrc}/icons/${item.icon}`} /> : null}
                         {item.title}</span>
                      </Link>
                    </ListItem> :

                      <MenuItem title={item.title} route={item.route} icon={item.icon} items={item.level3} />}
                  </div>

                ), items)}
              </List>
            </Collapse>
          </div>
        }
      </List>
    )
  }
  return (
    <div className='drawer'>
      <List>
        {map(({ title, route, icon, level2 }) => (
          <React.Fragment key={title}>
            {!level2 ?
              <ListItem button={true} key={title} >
                <Link to={route} className='item'>
                  <span style={{ color: '#fff', display: 'block' }}><img alt='hokibet188' style={{ width: 15 }} src={`${imageSrc}/icons/${icon}`} />{title}</span>
                </Link>
              </ListItem> : <div>
                <MenuItem title={title} route={route} icon={icon} items={level2} />
              </div>
            }
          </React.Fragment>
        ), SIDEBAR())}
      </List>
    </div>
  )
}

export default Sidebar