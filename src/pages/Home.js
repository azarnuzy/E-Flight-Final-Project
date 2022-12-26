import React from 'react';
import ContentHomepage from '../components/Content/contentHomepage';
import Footer from '../components/Footer/Footer';
import FormFlight from '../components/Home/FormFlight';
import Header from '../components/Home/Header';
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  window.scrollTo(0, 0);
  return (
    <div>
      <Navbar />
      <Header />
      <FormFlight />
      <ContentHomepage />
      <Footer />
    </div>
  );
}
