import audiBackground from '../../assets/audibackground.jpg';
import { ArrowTopRight } from '../../icons/ArrowTopRight';
import Button from '../Button/Button';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section
      style={{ backgroundImage: `url(${audiBackground})` }}
      className={styles.heroSection}
    >
      <div className={styles.content}>
        <p className={styles.text}>Drive your dream.</p>
        <Button to='/' className={styles.button}>
          <span>Explore now</span>
          <ArrowTopRight />
        </Button>
      </div>
    </section>
  );
}
