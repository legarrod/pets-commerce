import React from 'react'
import { NavLinkProps } from '../../types/propTypes'
import { NavLink as Link } from './NavElements'

const NavLink = ({ route, children, color, large, onClick }: NavLinkProps) => {

  return (
    <Link
      href={route}
      onClick={onClick}
      color={color}
      large={large}
    >
      {children}
    </Link>
  )
}

export default NavLink