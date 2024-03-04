import React from 'react'
import Logo from  '../../public/assets/DelLogo.png'
const Header = () => {
  return (
    <header className='bg-white p-2 z-50 text-black w-full  sticky shadow-md'>
      <div>
         <div>
          <img className='h-10' src={Logo} alt="Delkom's Logo" />
         </div>
      </div>
    </header>
  )
}

export default Header