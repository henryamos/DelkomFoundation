import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layouts = ({children}) => {
  return (
   <>
   <Header/>
   <main>
    {children}
   </main>
   <Footer/>
   </>
  )
}

export default Layouts