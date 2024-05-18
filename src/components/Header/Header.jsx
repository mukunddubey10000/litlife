import React, { useState, useEffect } from 'react';
import SvgLogo from '../../Assets/HeaderLogo.js'
import './Header.css'
import { motion } from 'framer-motion';
import bars from '../../Assets/bars.png'
import { Link } from 'react-scroll';

const Header = ({ navigate }) => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const transition = { type: 'spring', duration: 0.5 }
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menu && !event.target.closest('.header-menu') && !event.target.closest('.dropdown')) {
        setMenu(false);
      }
    };
    // Add event listener on component mount and remove on unmount
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menu]);

  return (
    <div className='HeaderContainer' onClick={() => navigate('/')}>
      <div className='logoHover'>
        <motion.div
          initial={{ scale: 0.1 }}
          whileInView={{ scale: 1 }}
          transition={{ ...transition, duration: 1.3 }}
          className="logo">
          <SvgLogo />
        </motion.div>
      </div>
      {(!menu && mobile) ?
        (
          <div
            className='dropdown'
            style={{
              backgroundColor: 'grey',
              padding: '0.5rem',
              borderRadius: '5px',
              position: 'relative',
              maxHeight: '1.5rem',
              marginRight: '10px',
              marginTop: '10px'
            }} onClick={() => setMenu(true)}
          >
            <img src={bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
          </div>
        )
        : (<ul className='header-menu'>
          <Link activeClass='active' to="services" spy={true} smooth={true} duration={800} onClick={() => {
            setMenu(false)
            navigate('/')
          }}>Services</Link>
          <Link activeClass='active' to="aboutUs" spy={true} smooth={true} duration={800} onClick={() => {
            navigate('/')
            setMenu(false)
          }}>About Us</Link>
          <Link activeClass='active' to="testimonials" spy={true} smooth={true} duration={800} onClick={() => {
            navigate('/')
            setMenu(false)
          }}>Happy Customers</Link>
          <Link activeClass='active' to="contactUs" spy={true} smooth={true} duration={800} onClick={() => {
            navigate('/')
            setMenu(false)
          }}>Contact Us</Link>
          {/* <li onClick={() => setMenu(false)}>Services</li>
          <li onClick={() => setMenu(false)}>Happy Customers</li>
          <li onClick={() => setMenu(false)}>About Us</li>
          <li onClick={() => setMenu(false)}>Contact Us</li> */}
        </ul>)
      }
    </div>
  )
}

export default Header