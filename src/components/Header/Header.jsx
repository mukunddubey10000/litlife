import React from 'react';
import SvgLogo from '../../Assets/HeaderLogo.js'
import './Header.css'
import { motion } from 'framer-motion';

const Header = () => {
  const transition = { type: 'spring', duration: 0.5 }

  return (
    <div className='HeaderContainer'>
      <motion.div
        initial={{ scale: 0.1 }}
        whileInView={{ scale: 1 }}
        transition={{ ...transition, duration: 1.3 }}
        className="logo">
        <SvgLogo />
      </motion.div>
      <ul className='header-menu'>
        <li>Services</li>
        <li>Happy Customers</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Header