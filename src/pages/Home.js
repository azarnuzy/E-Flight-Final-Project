import React from 'react';
import Footer from '../components/Footer/Footer';
import { ContentHomepage } from '../components/Home/ContentHomepage';
import FormFlight from '../components/Home/FormFlight';
import Header from '../components/Home/Header';
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <FormFlight />
      <ContentHomepage/>
      <Footer />
    </div>
  );
}
