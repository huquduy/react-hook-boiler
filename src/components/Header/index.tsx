import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar, 
  Typography} from '@material-ui/core'

import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon
} from '@material-ui/icons'
import { AuthContext } from 'contexts/authContext'
import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Drawer'
import './style.scss'

const Header: React.FC = () => {
  const { auth } = React.useContext(AuthContext)
  const [isDrawerOpened, setDrawerOpened] = React.useState<boolean>(false);

  const handleCloseDrawer = () => {
    setDrawerOpened(false);
  };

  const handleOpenDrawer = () => {
    setDrawerOpened(true);
  };

  const menuId = 'primary-search-account-menu';

  return (
    <div className='header-wraper'>
      <Drawer open={isDrawerOpened} onClose={handleCloseDrawer}>
        <div
          tabIndex={0}
          role="button"
          onClick={handleCloseDrawer}
          onKeyDown={handleCloseDrawer}
        >
          <Sidebar />
        </div>
      </Drawer>
      <AppBar className='header' position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className='icon-btn'
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
          <div className='flex-grow' />
          <img className='logo' alt='hokibet188' src={process.env.PUBLIC_URL + '/images/logo.png'} />
          <div className='flex-grow' />
          {!auth.token
            ? <Link to='/login' className='header-left'>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircleIcon />
                </IconButton>
              </Link>
            : <div>
              <Link to='/profile' className='header-left'>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <Typography variant="caption" display="block" gutterBottom={true}>
                    {auth.username}
                  </Typography>
                  <AccountCircleIcon />
                </IconButton>
              </Link></div>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header