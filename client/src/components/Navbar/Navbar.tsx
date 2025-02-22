import { Link } from 'react-router-dom';
import { useAuthStore } from '../../stores/useAuthStore';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  const { isAuthenticated } = useAuthStore();

  return (
    <nav className='bg-white py-4 px-8 flex justify-between'>
      <Logo />
      <div className='flex gap-8'>
        <Link to={''} className='flex justify-center items-center'>
          Market
        </Link>
        <Link to={''} className='flex justify-center items-center'>
          Contacts
        </Link>
        <Link to={''} className='flex justify-center items-center'>
          About
        </Link>
      </div>
      <div>
        {isAuthenticated ? (
          <div className='flex gap-2'>
            <Button to='/your-listings'>Your listings</Button>
            <Button to='/add'>Add listing</Button>
          </div>
        ) : (
          <Button to='/sign-in'>Sign in</Button>
        )}
      </div>
    </nav>
  );
}
