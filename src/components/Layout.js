import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './layout.css'
import Parcelcomponent from './Parcelcomponent';
import { motion, AnimatePresence } from 'framer-motion';

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ children }) => {
  // location.pathname = location.pathname || '/';
  const [ddd, setDdd] = useState({})
  useEffect(() => {
    // setDdd({ ...window.location })
    setDdd(prev => {
      return {
        ...window.location
      }
    })
  }, [children])

  const [homePage, setHomePage] = useState(true);

  useEffect(() => {
      if(window.location.pathname === '/') {
        setHomePage(true)
      } else {
        setHomePage(false)
      }

  }, [children])

  return (
    <>
     {homePage && <Parcelcomponent/>}
      <Header />
      <AnimatePresence>
        <motion.main
          key={ddd.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;