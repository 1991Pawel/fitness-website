import React from 'react';
import Layout from 'components/Layout/Layout';
import IntroSection from 'components/IntroSection/IntroSection';
import AboutSection from 'components/AboutSection/AboutSection';
import OfferSection from 'components/OfferSection/OfferSection';
import ContactSection from 'components/ContactSection/ContactSection';

const HomePage = () => (
  <Layout>
    <IntroSection />
    <AboutSection />
    <OfferSection />
    <ContactSection />
  </Layout>
);

export default HomePage;
