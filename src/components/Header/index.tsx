import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@material-ui/core'
import {
  AccountCircle as AccountCircleIcon,
  LocalAtm as LocalAtmIcon,
  Menu as MenuIcon
} from '@material-ui/icons'
import Credits from 'components/Credits'
import { AuthContext } from 'contexts/authContext'
import useDialog from 'hooks/dialog'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Sidebar from '../Drawer'
import './style.scss'


const Header: React.FC = () => {
  const { auth, setUnauthStatus } = React.useContext(AuthContext)
  const [isDrawerOpened, setDrawerOpened] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [showCreditsDialog, CreditsDialog] = useDialog(false)
  const history = useHistory()

  const toggleProfileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null)
  };

  const navigateToProfile = () => {
    setAnchorEl(null)
    history.push('/profile')
  }

  const handleLogout = () => {
    setUnauthStatus();
    setAnchorEl(null)
    history.push('/home')
    window.location.reload()
  }

  const handleCloseDrawer = () => {
    setDrawerOpened(false);
  };

  const handleOpenDrawer = () => {
    setDrawerOpened(true);
  }

  const menuId = 'primary-search-account-menu';

  return (
    <div className='header-wraper'>
      <Drawer open={isDrawerOpened} onClose={handleCloseDrawer} anchor="left">
        <div
          tabIndex={0}
          role="button"
          onClick={handleCloseDrawer}
          onKeyDown={handleCloseDrawer}
        >

        </div>
        <Sidebar />
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
            ?
            null
            : <div className="content-header">
              <Button className='header-left' color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={toggleProfileMenu}>
                
                <Typography variant="caption" display="block" gutterBottom={true}>
                  {auth.username}
                </Typography>
                <AccountCircleIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted={true}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorPosition={{ top: 40, left: 0 }}
              >
                <MenuItem onClick={showCreditsDialog}><LocalAtmIcon />{auth.balance} IDR</MenuItem>
                <MenuItem onClick={navigateToProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>}
          
          
          {/* <div className='flex-grow' /> */}
          
        </Toolbar>
        <CreditsDialog title='Your Credits'>
          <Credits />
        </CreditsDialog>
      </AppBar>
    </div>
  );
}

export default Header