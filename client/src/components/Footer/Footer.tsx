import { FacebookLogo } from '../../icons/FacebookLogo';
import { InstagramLogo } from '../../icons/InstagramLogo';
import { LinkedInLogo } from '../../icons/LinkedInLogo';
import { XLogo } from '../../icons/XLogo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.text}>
        Working times: Mon-Fri 09:00AM - 07:00PM
      </section>
      <section className={styles.text}>
        &copy; {new Date().getFullYear()} Boxcars.com. All rights reserved.
      </section>
      <section className={styles.social}>
        <p>Find us on:</p>
        <InstagramLogo />
        <FacebookLogo />
        <XLogo />
        <LinkedInLogo />
      </section>
    </footer>
  );
}
