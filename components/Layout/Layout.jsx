import React from 'react';
import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { useRouter } from 'next/router';

const queryClient = new QueryClient();

const Layout = ({ children }) => {
  const site = 'https://korzeniecka.pl';
  const canURL = site + useRouter().pathname;
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Monika Korzeniecka | Trener</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href={canURL} />
        <meta
          name="Description"
          content="Monika Korzeniecka, Konsultacje dietetyczne i treningowe, prowadzenie online, treningi personalne"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </QueryClientProvider>
  );
};
export default Layout;

Layout.propTypes = { children: PropTypes.node.isRequired };
