import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Page from '../Page/Page';

type NavbarLayoutProps = React.PropsWithChildren;

export default function NavbarLayout({ children }: NavbarLayoutProps) {
  return (
    <div>
      <Navbar />
      <Page>{children}</Page>
      <Footer />
    </div>
  );
}
