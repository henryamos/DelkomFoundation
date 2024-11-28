import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';

const Layouts = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {!isHomePage && <Header />}
      {isHomePage && <Hero />}
      <main className=''>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layouts;