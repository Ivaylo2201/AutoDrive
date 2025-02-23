import { Link } from 'react-router-dom';
import { useAuthStore } from '../../stores/useAuthStore';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { isAuthenticated } = useAuthStore();

  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.links}>
        <Link to='/market' className={styles.link}>
          Market
        </Link>
        <Link to='' className={styles.link}>
          Contacts
        </Link>
        <Link to='' className={styles.link}>
          About
        </Link>
      </div>
      <div className={styles.authButtons}>
        {isAuthenticated ? (
          <>
            <Button to='/your-listings'>Your listings</Button>
            <Button to='/add-listing'>Add listing</Button>
          </>
        ) : (
          <Button to='/auth/sign-in'>Sign in</Button>
        )}
      </div>
    </nav>
  );
}
