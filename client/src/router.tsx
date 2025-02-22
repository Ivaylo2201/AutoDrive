import { Routes, Route } from 'react-router-dom';
import NavbarLayout from './layouts/NavbarLayout/NavbarLayout';
import MakeDisplay from './components/MakeDisplay/MakeDisplay';
import HeroSection from './components/HeroSection/HeroSection';

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
      <Route path='/about' element={<></>} />
      <Route path='*' element={<></>} />
    </Routes>
  );
}
