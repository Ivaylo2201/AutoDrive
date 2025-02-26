import { Routes, Route } from 'react-router-dom';
import NavbarLayout from './layouts/NavbarLayout/NavbarLayout';
import MakeDisplay from './components/MakeDisplay/MakeDisplay';
import HeroSection from './components/HeroSection/HeroSection';
import MultiForm from './components/MultiForm';
import Market from './components/Market/Market';
import ProtectedLayout from './layouts/ProtectedLayout/ProtectedLayout';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm.tsx/SignUpForm';

export default function Router() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <NavbarLayout>
            <HeroSection />
            <MakeDisplay />
          </NavbarLayout>
        }
      />
      <Route
        path='/add-listing'
        element={
          <ProtectedLayout>
            <NavbarLayout>
              <MultiForm />
            </NavbarLayout>
          </ProtectedLayout>
        }
      />
      <Route
        path='/market'
        element={
          <NavbarLayout>
            <Market />
          </NavbarLayout>
        }
      />
      <Route path='/auth/sign-in' element={<SignInForm />} />
      <Route path='/auth/sign-up' element={<SignUpForm />} />
      <Route
        path='/your-listings'
        element={
          <ProtectedLayout>
            <NavbarLayout>
              <></>
            </NavbarLayout>
          </ProtectedLayout>
        }
      />
      <Route path='*' element={<></>} />
    </Routes>
  );
}
