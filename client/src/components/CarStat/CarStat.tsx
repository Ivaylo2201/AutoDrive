import capitalize from '../../utils/capitalize';
import styles from './CarStat.module.css';

type CarStatProps = {
  text: string;
} & React.PropsWithChildren;

export default function CarStat({ text, children }: CarStatProps) {
  return (
    <div className={styles.stat}>
      {children}
      <p>{capitalize(text)}</p>
    </div>
  );
}
