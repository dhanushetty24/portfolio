import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1 className={styles.navbar}>
          <div className={`imageWrapper ${styles.logoWrapper}`}>
            <Image  
            src='/logo.jpeg' 
            alt= 'logo'
            width={65}
            height={65}/>
          </div>
          <a href="/">Dhanush Shetty</a>
        </h1>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#experience">Experience</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
