import styles from './MakeDisplay.module.css';
import audiLogo from '../../assets/logos/audi.jpg';
import bmwLogo from '../../assets/logos/bmw.jpg';
import vwLogo from '../../assets/logos/vw.jpg';
import mercedesLogo from '../../assets/logos/mercedes.jpg';
import nissanLogo from '../../assets/logos/nissan.jpg';
import peugeotLogo from '../../assets/logos/peugeot.jpg';
import renaultLogo from '../../assets/logos/renault.jpg';
import MakeLink from '../MakeLink/MakeLink';

export default function MakeDisplay() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.heading}>Explore our premium brands</p>
        <div className={styles.logos}>
          <MakeLink to='/audi' image={audiLogo} make='Audi' />
          <MakeLink to='/bmw' image={bmwLogo} make='BMW' />
          <MakeLink to='/volkswagen' image={vwLogo} make='Volkswagen' />
          <MakeLink to='/mercedes' image={mercedesLogo} make='Mercedes' />
          <MakeLink to='/nissan' image={nissanLogo} make='Nissan' />
          <MakeLink to='/peugeot' image={peugeotLogo} make='Peugeot' />
          <MakeLink to='/renault' image={renaultLogo} make='Renault' />
        </div>
      </div>
    </section>
  );
}
