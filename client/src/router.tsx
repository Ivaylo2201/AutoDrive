import { Routes, Route } from 'react-router-dom';
import NavbarLayout from './layouts/NavbarLayout/NavbarLayout';
import MakeDisplay from './components/MakeDisplay/MakeDisplay';
import HeroSection from './components/HeroSection/HeroSection';

import Market from './components/Market/Market';
import ProtectedLayout from './layouts/ProtectedLayout/ProtectedLayout';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm.tsx/SignUpForm';
import MultiForm from './components/Multiform/MultiForm';
import CarDetails from './components/CarPage/CarPage';
import YourListings from './components/YourListings/YourListings';
import EditCar from './components/EditCar/EditCar';

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
        path='/market/:make?'
        element={
          <NavbarLayout>
            <Market />
          </NavbarLayout>
        }
      />
      <Route
        path='/cars/:id'
        element={
          <NavbarLayout>
            <CarDetails />
          </NavbarLayout>
        }
      />
      <Route path='/auth/sign-in' element={<SignInForm />} />
      <Route path='/auth/sign-up' element={<SignUpForm />} />
      <Route path='/edit/:id' element={<EditCar />} />
      <Route
        path='/your-listings'
        element={
          <ProtectedLayout>
            <NavbarLayout>
              <YourListings />
            </NavbarLayout>
          </ProtectedLayout>
        }
      />
      <Route path='*' element={<div>404</div>} />
    </Routes>
  );
}
