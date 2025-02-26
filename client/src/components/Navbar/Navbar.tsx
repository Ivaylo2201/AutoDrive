import { Link } from 'react-router-dom';
import { useAuthStore } from '../../stores/useAuthStore';
import Button from '../Link/Link';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { isAuthenticated, signOut } = useAuthStore();

  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.links}>
        {isAuthenticated && (
          <>
            <Link to='/your-listings' className={styles.link}>
              Your listings
            </Link>
            <Link to='/add-listing' className={styles.link}>
              Add listing
            </Link>
          </>
        )}
      </div>
      <div className={styles.authButtons}>
        {isAuthenticated ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <Button to='/auth/sign-in'>Sign in</Button>
        )}
      </div>
    </nav>
  );
}
