import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to='/'>
      <p className='text-4xl font-bold text-black'>AutoDrive</p>
    </Link>
  );
}
