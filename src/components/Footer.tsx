import styles from '../styles/Footer.module.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftSection}>
          <h4>Dhanush Shetty</h4>
          <p>
            Code, coffee, repeat. Fuelled by caffeine, powered by cloud!
          </p>
        </div>
        <div className={styles.rightSection}>
          <h4>SOCIAL</h4>
          <div className={styles.socialIcons}>
            <Link href="https://www.linkedin.com/in/dhanush-shetty-857625165/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/dhanushetty24" target="_blank" aria-label="Github">
              <FaGithub />
            </Link>
            <Link href="https://www.instagram.com/dhanushetty24" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024. Made by <Link rel="noreferrer" target="_blank" href="http://localhost:3000/">Dhanush Shetty</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
