import { BottomNavigation, BottomNavigationAction, Typography} from '@material-ui/core'
import { imageSrc } from 'config'
import { map } from 'ramda'
import React, { useState } from 'react'
import './style.scss'

const MyLink = ({ children, showLabel, ...rest }) => {
  const passedProps = {
    showlabel: showLabel,
    ...rest
  }
  return <a {...passedProps}>{children}</a>
}

interface IItem {
  icon: string;
  label: string;
  route: string;
  target: string;
}

const ITEMS = [
  {
    icon: 'home.png',
    label: 'Home',
    route: 'home',
    target: '',
  },
  {
    icon: 'promotion.png',
    label: 'Promotion',
    route: 'promotion',
    target: ''
  },
  {
    icon: 'wa.png',
    label: 'WhatsApp',
    route: 'https://api.whatsapp.com/send?phone=855883071618&text=Hallo%20Support%20Hokibet188%20Saya%20ingin%20Menanyakan%20beberapa%20hal',
    target: '_blank'
  },{
    icon: 'contact.png',
    label: 'Live Chat',
    route: 'https://v2.zopim.com/widget/livechat.html?key=4AV3AjiTSLlEJzZEwHTFojUPOVayt8Wr&&lang=ms&hostname=www.hokibet188.com&api_calls=%5B%5D',
    target: '_blank'
  }
]

const Bottom: React.FC = () => {
  const [activeTab, setActiveTab] = useState('promotion')
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <div className='bottom-wraper'>
      <BottomNavigation
        value={activeTab}
        onChange={handleChange}
        className='bottom'
      >
        {
          map(({ icon, label, route, target }: IItem) => 
          <MyLink showLabel="true" key={route} href={route} target={target}>
            <BottomNavigationAction
            showLabel={true}
            key={label}
            label={<Typography style={{color: '#efd77f'}} variant="caption" display="block" gutterBottom={true}>
              {label}
            </Typography>}
            icon={<img className='icon' alt='hokibet188' src={`${imageSrc}icons/${icon}`} />}
            />
          </MyLink>
          , ITEMS)
        }
      </BottomNavigation>
    </div>
  );
}

export default Bottom