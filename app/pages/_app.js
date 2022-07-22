import { useEffect } from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';

import 'bootstrap/dist/css/bootstrap.css';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
