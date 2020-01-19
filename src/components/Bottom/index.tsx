import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core'
import { imageSrc } from 'config'
import { map } from 'ramda'
import React, { useState } from 'react'
import './style.scss'

interface IItem {
  icon: string;
  label: string;
  route: string;
}

const ITEMS = [
  {
    icon: 'home.png',
    label: 'Home',
    route: 'home'
  },
  {
    icon: 'promotion.png',
    label: 'Promotion',
    route: 'promotion'
  },
  {
    icon: 'contact.png',
    label: 'Whatsapp',
    route: 'home'
  },{
    icon: 'contact.png',
    label: 'Live Support',
    route: 'home'
  }
]

export default ({ history }: { history: any }) => {
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
          map(({ icon, label }: IItem) => <BottomNavigationAction 
            label={<Typography style={{color: '#efd77f'}} variant="caption" display="block" gutterBottom={true}>
              {label}
            </Typography>}
            icon={<img className='icon' alt='hokibet188' src={`${imageSrc}icons/${icon}`} />}
          />, ITEMS)
        }
      </BottomNavigation>
    </div>
  );
}