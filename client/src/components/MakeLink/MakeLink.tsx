import { Link } from 'react-router-dom';
import styles from './MakeLink.module.css';

type MakeLinkProps = {
  image: string;
  make: string;
  to: string;
};

export default function MakeLink({ image, make, to }: MakeLinkProps) {
  return (
    <Link to={`/market${to}`} className={styles.link}>
      <img src={image} alt={make} className={styles.image} />
      <h4 className={styles.make}>{make}</h4>
    </Link>
  );
}
