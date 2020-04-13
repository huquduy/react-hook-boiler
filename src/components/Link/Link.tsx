import {
  Link as MuiLink,
} from '@material-ui/core'
import { AuthContext } from "contexts/authContext"
import React from 'react'
import { Link } from 'react-router-dom'

interface ILink {
  href: string;
  target?: string;
  children: React.ReactNode
}

const HokiLink:React.FC<ILink> = ({ href, target, children }: ILink) => {
  const { auth } = React.useContext(AuthContext)
  if (target && auth.) {
    return <MuiLink href={href} target={target}>
      {children}
    </MuiLink>
  }
  return <Link to={href}>
    {children}
  </Link>
}

export default HokiLink