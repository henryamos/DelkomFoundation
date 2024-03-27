import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layouts = ({children}) => {
  return (
   <>
   <Header/>
   <main className=''>
    {children} 
  </main>
   <Footer/>
   </>
  )
}

export default Layouts