import { BottomNavigation, BottomNavigationAction, Typography} from '@material-ui/core'
import { imageSrc } from 'config'
import { map } from 'ramda'
import React, { useState } from 'react'
import { Link, RouteComponentProps, withRouter} from 'react-router-dom'
import './style.scss'

interface IItem {
  icon: string;
  label: string;
  route: string;
  target: string;
  isExtenal: boolean;
}

const ITEMS = [
  {
    icon: 'home.png',
    isExtenal: false,
    label: 'Home',
    route: 'home',
    target: '',
  },
  {
    icon: 'promotion.png',
    isExtenal: false,
    label: 'Promotion',
    route: 'promotion',
    target: ''
  },
  {
    icon: 'wa.png',
    isExtenal: true,
    label: 'WhatsApp',
    route: 'https://api.whatsapp.com/send?phone=855883071618&text=Hallo%20Support%20Hokibet188%20Saya%20ingin%20Menanyakan%20beberapa%20hal',
    target: '_blank'
  },{
    icon: 'contact.png',
    isExtenal: true,
    label: 'Live Chat',
    route: 'https://v2.zopim.com/widget/livechat.html?key=4AV3AjiTSLlEJzZEwHTFojUPOVayt8Wr&&lang=ms&hostname=www.hokibet188.com&api_calls=%5B%5D',
    target: '_blank'
  }
]

const Bottom: React.FC<RouteComponentProps> = ({ history }) => {
  const [activeTab, setActiveTab] = useState('promotion')
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <div className='bottom-wraper'>
      <BottomNavigation
        value={activeTab}
        onChange={handleChange}
        showLabels={true}
        className='bottom'
      >
        {
          map(({ icon, label, route , target, isExtenal}: IItem) => 
          {!isExtenal ?
            <BottomNavigationAction
              key={label}
              label={<Typography style={{color: '#efd77f'}} variant="caption" display="block" gutterBottom={true}>
                {label}
              </Typography>}
              icon={<img className='icon' alt='hokibet188' src={`${imageSrc}icons/${icon}`} />}
              component={Link}  to={route}  rel="noopener noreferrer"
            />: <a key={label} href={route} target={target}>
              <BottomNavigationAction
              key={label}
              label={<Typography style={{color: '#efd77f'}} variant="caption" display="block" gutterBottom={true}>
                {label}
              </Typography>}
              icon={<img className='icon' alt='hokibet188' src={`${imageSrc}icons/${icon}`} />}
              />
            </a>
          }
          , ITEMS)
        }
      </BottomNavigation>
    </div>
  );
}

export default withRouter(Bottom)