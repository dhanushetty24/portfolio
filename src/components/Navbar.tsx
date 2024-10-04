import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1 className={styles.header}>
          <div className={`imageWrapper ${styles.logoWrapper}`}>
            <Image  
              src='/logo.jpeg' 
              alt= 'logo'
              width={65}
              height={65}/>
          </div>
          <Link href="/">Dhanush Shetty</Link>
        </h1>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isMenuOpen ? styles.changeBar1 : ''}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.changeBar2 : ''}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.changeBar3 : ''}`}></div>
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#experience">Experience</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
