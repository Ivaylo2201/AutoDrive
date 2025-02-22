import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './NavbarLayout.module.css';
import Footer from '../../components/Footer/Footer';

type NavbarLayoutProps = React.PropsWithChildren;

export default function NavbarLayout({ children }: NavbarLayoutProps) {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
