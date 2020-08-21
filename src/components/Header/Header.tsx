import React from 'react'
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'

import HeaderBrowser from './devices/browser/Header.browser'
import HeaderMobile from './devices/mobile/Header.mobile'

const Header: React.FC = () => {
  return ( 
    <>
      <MobileView>
        <HeaderMobile />
      </MobileView>
      <BrowserView>
        <HeaderBrowser />
      </BrowserView>
    </>
  )
}

export default Header