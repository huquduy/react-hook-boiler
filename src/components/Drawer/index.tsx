import {
  Collapse,
  List,
  ListItem,
} from '@material-ui/core'
import { ExpandLess, ExpandMore, } from '@material-ui/icons'
import { imageSrc } from 'config'
import { AuthContext } from "contexts/authContext"
import { map } from 'ramda'
import React from 'react'
import { Link } from 'react-router-dom'
import { games, profile, report } from './constant';
import './style.scss'

const Sidebar: React.FC = () => {
  const { auth } = React.useContext(AuthContext)
  const isLogged = !auth.token.length
  const MenuItem = ({ title, route, icon, items }) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(!open);
    };
    return (
      <React.Fragment >
        {!items ? null :
          <React.Fragment key={title}>
            <ListItem button={true} onClick={handleClickOpen} key={title}>
              {route ?
                <Link to={route} className='item'>
                  <span className='item-text'>{title}</span>
                </Link>
                :
                <a className='item'>
                  <span className='item-text'>
                    {icon ? <img alt='hokibet188' className="icon-menu" src={`${imageSrc}/icons/${icon}`} /> : null}
                    {title}</span>
                </a>}
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit={true}>
              <List component="div" disablePadding={true}>
                {map((item) => (
                  <React.Fragment key={item.title}>
                    {!item.items ? <ListItem button={true}>
                      <Link to={item.route} className='item'>
                        <span className='item-text'>
                          {item.icon ? <img alt='hokibet188' className="icon-menu" src={`${imageSrc}/icons/${item.icon}`} /> : null}
                          {item.title}</span>
                      </Link>
                    </ListItem> :
                      <MenuItem title={item.title} route={item.route} icon={item.icon} items={item.items} />}
                  </React.Fragment>
                ), items)}
              </List>
            </Collapse>
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
  const MenuCollapse = ({ title, route, icon, items }) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
      setOpen(!open);
    };
    return (
      <React.Fragment key={title}>
        <ListItem button={true} onClick={handleClick}>
          <a className='item'>
            <span className='item-text'>
              <img alt='hokibet188' className="icon-menu" src={`${imageSrc}/icons/${icon}`} />{title}
            </span>
          </a>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit={true}>
          <List component="div" disablePadding={true}>
            {map((item) => (
              <ListItem button={true} key={item.route} >
                <Link to='deposit' className='item'>
                  <span className='item-text'>{item.icon ? <img alt='hokibet188' className="icon-menu" src={`${imageSrc}/icons/${item.icon}`} /> : null}{item.title}</span>
                </Link>
              </ListItem>
            ), items)}
          </List>
        </Collapse>
      </React.Fragment>
    )
  }

  return (
    <div className='drawer'>
      <List>
        <ListItem button={true} key="home" >
          <Link to='/home' className='item'>
            <span className='item-text'><img alt='hokibet188' className="icon-menu" src={`${imageSrc}/icons/home.png`} />Home</span>
          </Link>
        </ListItem>
        {map((item: any) =>
          <MenuItem title={item.title} route={item.route} icon={item.icon} items={item.items} />, games)}
        {!isLogged ? <ListItem button={true} key="profile" >
          <Link to='profile' className='item'>
            <span className='item-text'><img alt='hokibet188' className="icon-menu" src={`${imageSrc}/icons/about.png`} />Profile</span>
          </Link>
        </ListItem>
          : <ListItem button={true} key="login" >
            <Link to='login' className='item'>
              <span className='item-text'><img alt='hokibet188' className="icon-menu" src={`${imageSrc}/icons/about.png`} />Login</span>
            </Link>
          </ListItem>}
        {!isLogged ?
          <React.Fragment>
            {map((item: any) =>
              <MenuCollapse title={item.title} route={item.route} icon={item.icon} items={item.items} />, profile)}
            {map((item: any) =>
              <MenuCollapse title={item.title} route={item.route} icon={item.icon} items={item.items} />, report)}
          </React.Fragment> : null}
        <ListItem button={true} key="download" >
          <Link to='/mobile/0' className='item'>
            <span className='item-text'><img alt='hokibet188' className="icon-menu" src={`${imageSrc}/icons/download.png`} />Download</span>
          </Link>
        </ListItem>
        <ListItem button={true} key="about" >
          <Link to='/about' className='item'>
            <span className='item-text'><img alt='hokibet188' className="icon-menu" src={`${imageSrc}/icons/about.png`} />About Us</span>
          </Link>
        </ListItem>
        <ListItem button={true} key="term" >
          <Link to='/term' className='item'>
            <span className='item-text'><img alt='hokibet188' className="icon-menu" src={`${imageSrc}/icons/term.png`} />Term & Condition</span>
          </Link>
        </ListItem>
        <ListItem button={true} key="privacy" >
          <Link to='/privacy' className='item'>
            <span className='item-text'><img alt='hokibet188' className="icon-menu" src={`${imageSrc}/icons/privacy.png`} />Privacy & Policy</span>
          </Link>
        </ListItem>
        <ListItem button={true} key="responsible" >
          <Link to='/reposible' className='item'>
            <span className='item-text'><img alt='hokibet188' className="icon-menu" src={`${imageSrc}/icons/responsible.png`} />Resposible Gambling</span>
          </Link>
        </ListItem>
        <ListItem button={true} key="banking" >
          <Link to='/banking' className='item'>
            <span className='item-text'><img alt='hokibet188' className="icon-menu" src={`${imageSrc}/icons/banking.png`} />Banking</span>
          </Link>
        </ListItem>
        <ListItem button={true} key="contact" >
          <Link to='/contact' className='item'>
            <span className='item-text'><img alt='hokibet188' className="icon-menu" src={`${imageSrc}/icons/contact.png`} />Contact Us</span>
          </Link>
        </ListItem>
        <ListItem button={true} key="faq" >
          <Link to='/faq' className='item'>
            <span className='item-text'><img alt='hokibet188' className="icon-menu" src={`${imageSrc}/icons/faq.png`} />FAQ</span>
          </Link>
        </ListItem>
      </List>
    </div>
  )
}

export default Sidebar