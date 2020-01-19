import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { AppBar, Drawer } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import LocalAtm from '@material-ui/icons/LocalAtm';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Sidebar from '../Drawer'
import './style.scss'

const Header: React.FC<RouteComponentProps> = ({ history }) => {
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
          <div className='header-left'>
            <LocalAtm />
            <Typography variant="caption" display="block" gutterBottom={true}>
              100 IDR
            </Typography>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header)