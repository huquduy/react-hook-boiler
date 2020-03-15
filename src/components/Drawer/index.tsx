import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from '@material-ui/core'
import { imageSrc } from 'config'
import { map } from 'ramda'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SIDEBAR from './constant'
import './style.scss'
import { ExpandLess, StarBorder, ExpandMore } from '@material-ui/icons'



const Sidebar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <div className='drawer'>
      <List>
        {map(({ title, route, icon, level2 }) => (
          <React.Fragment key={title}>
            {!level2 ?
              <ListItem button={true} key={title} >
                <Link to={route} className='item'>
                  <span style={{ color: '#fff', display: 'block' }}>{<img alt='hokibet188' style={{ width: 20 }} src={`${imageSrc}/icons/${icon}`} />}{title}</span>
                </Link>
              </ListItem> : <div>
                <ListItem button={true} onClick={handleClickOpen}>
                  <Typography variant="caption" display="block" gutterBottom={true}>
                    {title}
                  </Typography>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {map(({ title1, route1, icon1, level3 }) => (
                      <div>
                        {!level3 ? <ListItem button={true} key={title} >
                          <Link to={route1} className='item'>
                            <span style={{ color: '#fff', display: 'block' }}>{<img alt='hokibet188' style={{ width: 20 }} src={`${imageSrc}/icons/${icon1}`} />}{title1}</span>
                          </Link>
                        </ListItem> : <div>
                            <ListItem button={true} onClick={handleClickOpen}>
                              <Typography variant="caption" display="block" gutterBottom={true}>
                              <span style={{ color: '#fff', display: 'block' }}>{title}</span>
                              </Typography>
                              {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                {map(({ title2, route2, icon2 }) => (
                                  <div>
                                    <ListItem button >
                                      <Link to={route2} className='item'>
                                      <span style={{ color: '#fff', display: 'block' }}>{title2}</span>
                                      {/* <span style={{ color: '#fff', display: 'block' }}>{<img alt='hokibet188' style={{ width: 20 }} src={`${imageSrc}/icons/${icon2}`} />}{title2}</span> */}
                                      </Link>
                                    </ListItem>
                                  </div>
                                ), level3)}
                              </List>
                            </Collapse>
                          </div>}
                      </div>

                    ), level2)}
                  </List>
                </Collapse>
              </div>

            }
          </React.Fragment>
        ), SIDEBAR())}
      </List>
    </div>
  )
}

export default Sidebar