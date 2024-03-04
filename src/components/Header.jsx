import React, { useState } from 'react'
import Logo from  '../../public/assets/DelLogo.png'
import { NavLink } from 'react-router-dom'
import { LinkData } from './data/data'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
const Header = () => {
  const [open,setOpen]=useState(false)
  return (
    <header className='bg-white p-2 z-50 text-black w-full  sticky shadow-md'>
      <div className='flex justify-between items-center'> 
     
         {/* Logo */}
         <div className='logo flex items-center '>
          <img className='h-10' src={Logo} alt="Delkom's Logo" />
         </div>
         {/* Nav Links */}
         <nav className={ open ? 'mobile-view':'desktop-view'}>
            <ul className='flex items-center gap-6'>
                {
                  LinkData.map((link)=>(
                    <li className='font-nunito' onClick={()=>setOpen(null)} key={link.id}>
                      <NavLink 
                      className={
                          ({isActive})=>(isActive ? 'text-darkYellow text-sm  md:text-blue':'text-secondary hover:text-darkYellow text-[16px] md:text-dark')
                      
                      }
                      to={link.url}
                      >
                        {link.title}
                      </NavLink>
                    </li>
                  ))
                }
                 <button className='btn-primary font-nunito text-sm '>Join Us</button>
            </ul>
           
         </nav>
            {/* Menu Button */}
          <button>
                <HiOutlineMenuAlt1
                  className='open-menu'
                  onClick={()=>setOpen(!open)}
                  size={25}
                />
          </button>
        
         
         
      </div>
    </header>
  )
}

export default Header