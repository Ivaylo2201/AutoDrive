import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/useAuthStore';

type ProtectedLayoutProps = React.PropsWithChildren;

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? children : <Navigate to='/auth/sign-in' />;
}
