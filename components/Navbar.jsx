import React from 'react'
import Image from 'next/image'
import logo from '../public/info-logo.png'

const Navbar = () => {
  return (
    <nav className='w-full p-6 lg:px-12 2xl:px-32'>
      <Image src={logo} alt="Infosearch Logo" className='w-[180px] lg:w-[200px]' />
    </nav>
  )
}

export default Navbar