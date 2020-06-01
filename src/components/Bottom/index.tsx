import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core'
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
    route: '/home',
    target: '',
  },
  {
    icon: 'promotion.png',
    label: 'Promotion',
    route: '/promotion',
    target: ''
  },
  {
    icon: 'wa.png',
    label: 'WhatsApp',
    route: 'https://api.whatsapp.com/send?phone=855883071618&text=Hallo%20Support%20Hokibet188%20Saya%20ingin%20Menanyakan%20beberapa%20hal',
    target: '_blank'
  }, {
    icon: 'contact.png',
    label: 'Live Chat',
    route: 'https://static.zdassets.com/web_widget/latest/liveChat.html?v=10#key=hokibet188.zendesk.com&settings=JTdCJTIyd2ViV2lkZ2V0JTIyJTNBJTdCJTIyY2hhdCUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBbnVsbCUyQyUyMm1lbnVPcHRpb25zJTIyJTNBJTdCJTIyZW1haWxUcmFuc2NyaXB0JTIyJTNBdHJ1ZSU3RCUyQyUyMmRlcGFydG1lbnRzJTIyJTNBJTdCJTdEJTJDJTIycHJlY2hhdEZvcm0lMjIlM0ElN0IlMjJkZXBhcnRtZW50TGFiZWwlMjIlM0FudWxsJTJDJTIyZ3JlZXRpbmclMjIlM0FudWxsJTdEJTJDJTIyb2ZmbGluZUZvcm0lMjIlM0ElN0IlMjJncmVldGluZyUyMiUzQW51bGwlN0QlMkMlMjJjb25jaWVyZ2UlMjIlM0ElN0IlMjJhdmF0YXJQYXRoJTIyJTNBbnVsbCUyQyUyMm5hbWUlMjIlM0FudWxsJTJDJTIydGl0bGUlMjIlM0FudWxsJTdEJTdEJTJDJTIyY29sb3IlMjIlM0ElN0IlMjJhcnRpY2xlTGlua3MlMjIlM0ElMjIlMjIlMkMlMjJidXR0b24lMjIlM0ElMjIlMjIlMkMlMjJoZWFkZXIlMjIlM0ElMjIlMjIlMkMlMjJsYXVuY2hlciUyMiUzQSUyMiUyMiUyQyUyMmxhdW5jaGVyVGV4dCUyMiUzQSUyMiUyMiUyQyUyMnJlc3VsdExpc3RzJTIyJTNBJTIyJTIyJTJDJTIydGhlbWUlMjIlM0FudWxsJTdEJTdEJTdE&mid=&locale=en-US&title=Web%20Widget%20Live%20Chat',
    target: '_blank'
  }
]

const Bottom: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home')
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
                label={<Typography style={{ color: '#efd77f' }} variant="caption" display="block" gutterBottom={true}>
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