import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Dhanush Shetty</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
