import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'
import {
  AccountCircle as AccountCircleIcon,
  LocalAtm as LocalAtmIcon,
  Menu as MenuIcon
} from '@material-ui/icons'
import CurrentBalance, { ICredit } from 'components/CurrentBalance'
import { AuthContext } from 'contexts/authContext'
import useDialog from 'hooks/dialog'
import useLoading from 'hooks/loading'
import { map } from 'ramda'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { get, post } from 'services/http'
import Sidebar from '../Drawer'
import './style.scss'


const Header: React.FC = () => {
  const { auth } = React.useContext(AuthContext)
  const [isDrawerOpened, setDrawerOpened] = React.useState<boolean>(false);
  const [showDialog, DialogComponent] = useDialog(false)
  const [credits, setCredits] = useState<ICredit[] | []>([])
  const [isLoading, withLoading, Loading] = useLoading(false)

  const handleCloseDrawer = () => {
    setDrawerOpened(false);
  };

  const handleOpenDrawer = () => {
    setDrawerOpened(true);
  };
  const handleDiaLog = () => {
    showDialog()
  };
  useEffect(() => {
    const fetchCredits = async () => {
      const correctCreditProps = ({ title, data }) => ({
        data, title
      })
      const { data: creditResps }: { data: any[] } = await withLoading(() => get({
        path: 'user/credit'
      }))
        .catch((err) => err)
      setCredits(map(correctCreditProps, creditResps))

    }
    if(auth.username) {
      fetchCredits();
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
                 auth.username  ? <IconButton
                edge="start"
                className='icon-btn'
                color="inherit"
                aria-label="open dialog"
                onClick={handleDiaLog}
              >
                <LocalAtmIcon />
              </IconButton> : null
              }
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
        <DialogComponent title='CURRENT BALANCE'>
          <CurrentBalance label="Current Balance" arrayValue={credits} />
        </DialogComponent>
      </AppBar>
    </div>
  );
}

export default Header