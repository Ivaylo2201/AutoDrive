import audiBackground from '../../assets/audibackground.jpg';
import { ArrowTopRight } from '../../icons/ArrowTopRight';
import Link from '../Link/Link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section
      style={{ backgroundImage: `url(${audiBackground})` }}
      className={styles.heroSection}
    >
      <div className={styles.content}>
        <p className={styles.text}>Drive your dream.</p>
        <Link to='/market' className={styles.button}>
          <span>Explore now</span>
          <ArrowTopRight />
        </Link>
      </div>
    </section>
  );
}
