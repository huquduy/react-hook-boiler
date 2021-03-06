import {
  AppBar,
  Button,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@material-ui/core'
import {
  AccountCircle as AccountCircleIcon,
  ExpandLess,
  ExpandMore,
  LocalAtm as LocalAtmIcon,
  Menu as MenuIcon
} from '@material-ui/icons'
import Credits from 'components/Credits'
import Sidebar from 'components/Drawer'
import { AuthContext } from 'contexts/authContext'
import useDialog from 'hooks/dialog'
import useLoading from 'hooks/loading'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { get } from 'services/http'
import './style.scss'

const Header: React.FC = () => {
  const [, withLoading, ] = useLoading(false)
  const { auth, setUnauthStatus } = React.useContext(AuthContext)
  const [isDrawerOpened, setDrawerOpened] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [showCreditsDialog, CreditsDialog] = useDialog(false)
  const [balance, setBalance] = useState('')
  const history = useHistory()
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(!open);
  };

  const toggleProfileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    fetchInformation();
    setAnchorEl(event.currentTarget);
  };

  const fetchInformation = async () => {
    const { user: User, error }: { user: any, error: string } = await withLoading(() => get({
      path: 'user/infomation'
    }))
      .catch((err) => err)
    if (error) {
      return;
    }
    setBalance(String(User.balance))
  }

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

  // const menuId = 'primary-search-account-menu';

  return (
    <div className='header-wraper'>
      <Drawer open={isDrawerOpened} onClose={handleCloseDrawer} anchor="left">
        <div
          tabIndex={0}
          role="button"
          onClick={handleCloseDrawer}
          onKeyDown={handleCloseDrawer}
        />
        <Sidebar handleCloseDrawer={handleCloseDrawer} />
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
          <Link to="/"><img className='logo' alt='hokibet188' src={`${process.env.PUBLIC_URL  }/images/logo.png`} /></Link>
          <div className='flex-grow' />
          {!auth.token
            ?
              <div className="block-hidden"> <AccountCircleIcon style={{ display: 'none' }} />&nbsp;</div>
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
                <MenuItem onClick={showCreditsDialog}><LocalAtmIcon />{balance} IDR</MenuItem>
                <MenuItem onClick={navigateToProfile}>Profile</MenuItem>
                <MenuItem className="profile-menu">
                  <List><ListItem button={true} onClick={handleClickOpen}>
                    <ListItemText primary="Report" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit={true}>
                      <List component="div" disablePadding={true}>
                        <ListItem button={true}>
                          <Link to="/reports/deposit" className="link-primary">Deposit</Link>
                        </ListItem>
                        <ListItem button={true}><Link to="/reports/withdraw" className="link-primary">Withdrawn</Link></ListItem>
                        <ListItem button={true}><Link to="/reports/transfer" className="link-primary">Transfer</Link></ListItem>
                      </List>
                    </Collapse>
                  </List>
                </MenuItem>
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