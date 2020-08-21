import React from 'react'
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'

import HomeBrowser from './devices/Home.browser'
import HomeMobile from './devices/Home.mobile'

const Home: React.FC = () => {
  return ( 
    <>
      <MobileView>
        <HomeMobile />
      </MobileView>
      <BrowserView>
        <HomeBrowser />
      </BrowserView>
    </>
  )
}

export default Home