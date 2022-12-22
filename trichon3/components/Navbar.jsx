'use client';

import { motion } from 'framer-motion';

import { useState, useEffect } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navStyle, setNavStyle] = useState({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavStyle({
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99,
        });
      } else {
        setNavStyle({
          backgroundColor: 'transparent',
          backdropFilter: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      style={navStyle}
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 h-[100px] `}
    >
      <div className=" w-[50%] inset-0 gradient-01 " />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <div className="w-[120px] h-[120px] -mt-10 -ml-10 -mr-10">
          <img
            src="/logo.png"
            alt="search"
            className="w-full object-cover"
          />
        </div>
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          TRICHON-MEDIA
        </h2>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <motion.nav className="absolute left-0 right-0 bg-black z-20 min-w-full mt-14 flex">
            <div className="bg-blue-500 w-full flex items-center justify-center ">
              <ul className="bg-red-500 rounded-md shadow-lg">
                <li className="py-4 px-4 block font-medium text-gray-700 hover:bg-gray-100">
                  Menu item 1
                </li>
                <li className="py-4 px-4 block font-medium text-gray-700 hover:bg-gray-100">
                  Menu item 2
                </li>
                <li className="py-4 px-4 block font-medium text-gray-700 hover:bg-gray-100">
                  Menu item 3
                </li>
              </ul>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
