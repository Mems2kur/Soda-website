import React from 'react'
import { UilUser, UilBars } from '@iconscout/react-unicons'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion'

const MenuBar = [
  { id: 1, title: "Home", link: "/home" },
  { id: 2, title: "Categories", link: "/categories" },
  { id: 3, title: "Blog", link: "/blog" },
  { id: 4, title: "About", link: "/about" },
  { id: 5, title: "Contact", link: "/contact" },
]

function Navbar({logo}) {
  return (
    <div className='py-4 px-6 sm:px-10 md:px-16 lg:px-[100px]'>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center justify-between gap-6 sm:gap-10 md:gap-[70px]"
      >
        {/* Logo */}
        <div className='logo'>
          <img src={logo} alt="logo" className='w-[80px] sm:w-[100px] md:w-[120px]' />
        </div>

        {/* Menu - Hidden on small screens */}
        <div className='hidden md:block'>
          <ul className='flex items-center justify-center gap-4 lg:gap-10'>
            {MenuBar.map((val, id) => (
              <li key={id} className='cursor-pointer uppercase text-[14px] md:text-[16px] lg:text-[18px] text-white font-semibold p-3'>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  {val.title}
                </UpdateFollower>
              </li>
            ))}

            {/* User Icon */}
            <div className='text-white font-bold pl-4'>
              <UilUser />
            </div>
          </ul>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className='md:hidden text-white text-[30px]'>
          <UilBars size={35} />
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
