
  import React, { FC, ReactNode, useState } from "react"
  import MarqueeText from 'react-marquee-text-component';
  import './style.scss'
  
  const useMarquee: any = () => {
    const MarqueenComponent: FC<{ children?: ReactNode, text?: string }> = ({
      children, text = 'Akuhoki message'
    }) => (
        <MarqueeText className="marquee" text={text} duration={30} repeat={1}/>
    )
    return [ MarqueenComponent ]
  }
  export default useMarquee