
'use client'

import { NAV_LINKS } from "@/constants"
import { signin_link } from "@/constants"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import Button from "./Button"
import React from "react"

const Navbar = () => {

  const [showMenu, setShowMenu] = React.useState(false)

  const handleMenuToggle = () => {
    setShowMenu(!showMenu)
  }

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    if (href) {
      window.location.href = href
    }
    setShowMenu(false)
  }

  const menuStyle = showMenu ? { left: '100px' } : {}
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/BioLinkLogo.png" alt="logo" width={74} height={29} />
      </Link>

      <div className="relative">
        <button
          type="button"
          onClick={handleMenuToggle}
          className="inline-block cursor-pointer lg:hidden"
        >
          <Image 
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
          />
        </button>
        {showMenu && (
          <ul className={`absolute top-full right-0 bg-white rounded-lg shadow-md p-4 mt-2 lg:hidden transition-transform duration-300   min-w-full`}>
            {NAV_LINKS.map((link, index) => (
              <li key={link.key} className={`mb-2 text-black`}>
                <a
                  href={link.href}
                  onClick={(event) => handleLinkClick(event)}
                  className={`block p-2 text-center border-b border-gray-200 transition-all hover:bg-gray-200 w-full ${index === NAV_LINKS.length  ? 'text-white' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {signin_link.map((link, index) => (
              <li key={link.key} className={`mb-2 bg-gray-50 ${index !== signin_link.length - 1 ? 'text-white' : ''}`}>
                <a
                  href={link.href}
                  onClick={(event) => handleLinkClick(event)}
                  className={`block p-2 text-center border-b border-gray-200 transition-all hover:bg-gray-200 w-full ${index !== signin_link.length - 1 ? 'text-white' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
    </nav>
  )
}

export default Navbar