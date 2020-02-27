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
import { Link , useHistory} from 'react-router-dom'
import store from 'store'
import Sidebar from '../Drawer'
import './style.scss'


const Header: React.FC  = () => {
  const { auth } = React.useContext(AuthContext)
  const [isDrawerOpened, setDrawerOpened] = useState<boolean>(false);
  const [showDialog, DialogComponent] = useDialog(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const history = useHistory()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null)
  };
  const handleProfile =() =>{
    setAnchorEl(null)
    history.push('/profile')
  }
  const handleLogout= () =>{
    store.clearAll()
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
            : <div className="content-header">
              {
                auth.username ? <IconButton
                  edge="start"
                  className='icon-btn'
                  color="inherit"
                  aria-label="open dialog"
                  onClick={showDialog}
                >
                  <LocalAtmIcon />
                </IconButton> : null
              }
              <Button className='header-left' color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <Typography variant="caption" display="block" gutterBottom={true}>
                    {auth.username}
                    <br />
                    {auth.balance} IDR
                  </Typography>
                  <AccountCircleIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorPosition ={{top:40, left:0}}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
              {/* <Link to='/profile' className='header-left'>
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
              </Link> */}
              </div>}
        </Toolbar>
        <DialogComponent title='Your Credits'>
          <Credits />
        </DialogComponent>
      </AppBar>
    </div>
  );
}

export default Header