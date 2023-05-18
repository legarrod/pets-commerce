"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { useWindowSize } from '../../hooks'
import LogoImage from '../../../../public/assets/images/logo-nav.png'
import cartIcon from '../../../../public/assets/images/icon-cart.png'
import IconNav from '../../../../public/assets/images/icon-nav.png'
import { WindowSize } from '../../types'
import {
  CloseButtonContainer,
  CloseIcon,
  LogoContainer,
  MenuIcon,
  MenuLinkContainer,
  Nav,
  NavLinkContainer,
  OverlayMenu
} from './NavElements'

import NavLink from './NavLink'

const Navbar = () => {

  const size: WindowSize = useWindowSize()
  const [showMenu, setShowMenu] = useState(false)

  const openMenu = () => {
    setShowMenu(true)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  return (
    <Nav>
      <LogoContainer>
        <NavLink route="/" >
          <div className='flex flex-row items-center p-3'>
             <Image
              src={IconNav}
              alt="logo"
           className='w-10 h-10'
          />
          <Image
              src={LogoImage}
              alt="logo"
              className='h-12 w-auto'
              width={205}
              height={77}
          />
       
          </div>
       
        </NavLink>
      </LogoContainer>

      <NavLinkContainer>
        {
          size.width > 768 ?
            <>
              <NavLink color='white' route="/">
              Agregar dirección
              </NavLink>
        
              <NavLink color='white' route="/sale">
                <button className='bg-gray px-5 py-1 rounded-3xl h-auto text-white'>
                   Comenzar 
                </button>
             
              </NavLink>
              <NavLink color='white' route="/profile">
                <BsFillPersonFill size={30} className='bg-gray rounded-full p-1'/>
              </NavLink>
              <Image
              src={cartIcon}
              alt="logo"
              className='h-12 w-auto mr-5'
              width={205}
              height={77}
          />
            </>
            :
            <MenuIcon
              size={30}
              onClick={openMenu}
            />
        }
      </NavLinkContainer>

      {
        showMenu &&
        <OverlayMenu>
          <CloseButtonContainer>
            <CloseIcon
              size={40}
              color={'white'}
              onClick={closeMenu}
            />
          </CloseButtonContainer>
          <MenuLinkContainer>
            <NavLink
              route="/"
              large
              color='white'
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              route="/products"
              large
              color='white'
              onClick={closeMenu}
            >
              Products
            </NavLink>
            <NavLink
              route="/sale"
              large
              color='white'
              onClick={closeMenu}
            >
              Sale
            </NavLink>
            <NavLink
              route="/profile"
              large
              color='white'
              onClick={closeMenu}
            >
              Profile
            </NavLink>
          </MenuLinkContainer>
        </OverlayMenu>
      }
    </Nav>
  )
}

export default Navbar