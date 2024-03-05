import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '/assets/DelLogo.png';
import { NavLink } from 'react-router-dom';
import { LinkData } from './data/data';
import { HiOutlineMenuAlt1, HiX } from 'react-icons/hi';

const Header = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } }, // Increase speed by setting duration to 0.3 seconds
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.3 } } // Increase speed by setting duration to 0.3 seconds
  }

  return (
    <header className='bg-white p-2 z-50 text-black w-full  sticky shadow-md'>
      <div className='flex justify-between items-center'> 
     
         {/* Logo */}
         <div className='logo flex items-center '>
          <img className='h-10' src={Logo} alt="Delkom's Logo" />
         </div>
         {/* Nav Links */}
         <nav className='desktop-view'> {/* Render desktop view without animation */}
           <ul className='flex items-center gap-6'>
             {LinkData.map((link) => (
               <li className='font-nunito' key={link.id}>
                 <NavLink
                   className={({ isActive }) => (isActive ? 'text-darkYellow hover:text-darkYellow  text-sm  md:text-blue' : 'text-secondary hover:text-blue md:text-dark')}
                   to={link.url}
                 >
                   {link.title}
                 </NavLink>
               </li>
             ))}
             <button className='btn-primary font-nunito text-sm '>Join Us</button>
           </ul>
         </nav>
         
         {/* Mobile View with Framer Motion animation */}
         <AnimatePresence>
           {open && (
             <motion.nav
               className='mobile-view'
               initial="closed"
               animate="open"
               exit="closed"
               variants={variants}
             >
               <ul className='flex items-center gap-6'>
                 {LinkData.map((link) => (
                   <li className='font-nunito' onClick={() => setOpen(false)} key={link.id}>
                     <NavLink
                       className={({ isActive }) => (isActive ? 'text-darkYellow text-sm  md:text-blue' : 'text-secondary hover:text-darkYellow  md:text-dark')}
                       to={link.url}
                     >
                       {link.title}
                     </NavLink>
                   </li>
                 ))}
                 <button className='btn-primary font-nunito text-sm '>Join Us</button>
               </ul>
             </motion.nav>
           )}
         </AnimatePresence>
         
         {/* Menu Button */}
         <button>
           {open ? (
             <HiX
               className='close-menu'
               onClick={() => setOpen(false)}
               size={25}
             />
           ) : (
             <HiOutlineMenuAlt1
               className='open-menu'
               onClick={() => setOpen(true)}
               size={25}
             />
           )}
         </button>
         
      </div>
    </header>
  );
}

export default Header;
