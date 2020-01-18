import { AppBar, Tab, Tabs, Typography } from '@material-ui/core'
import { imageSrc } from 'config'
import React, { useState } from 'react'
import './style.scss'

export default ({ history }: { history: any }) => {
  const [activeTab, setActiveTab] = useState('promotion')
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <div className='footer-wraper'>
      <AppBar className='footer' position="fixed">
      <Tabs value={activeTab} onChange={handleChange} aria-label="simple tabs example">
        <Tab value='promotion' label={<div>
          <img className='icon' alt='hokibet188' src={`${imageSrc}promotion.svg`} />
          <Typography variant="caption" display="block" gutterBottom={true}>
            Download
          </Typography>
          </div>} />
        <Tab label={<div>
          <img className='icon' alt='hokibet188' src={`${imageSrc}promotion.svg`} />
          <Typography variant="caption" display="block" gutterBottom={true}>
            Promotion
          </Typography>
          </div>} />
        <Tab label={<div>
          <img className='icon' alt='hokibet188' src={`${imageSrc}promotion.svg`} />
          <Typography variant="caption" display="block" gutterBottom={true}>
            Whatsapp
          </Typography>
          </div>} />
        <Tab label={<div>
          <img className='icon' alt='hokibet188' src={`${imageSrc}promotion.svg`} />
          <Typography variant="caption" display="block" gutterBottom={true}>
            Live Chat
          </Typography>
          </div>} />
      </Tabs>
      </AppBar>
    </div>
  );
}