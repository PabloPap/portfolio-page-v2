import Footer from '../common/components/footer';
import Header from '../common/components/header';
import ScrollToTop from 'react-scroll-up';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
// import SEO from '../next-seo.config';
import '../site.scss';
import ErrorBoundary from '../components/ErrorBoundary';

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Head>
        <meta
          name="google-site-verification"
          content="dUmu3_Vr3KbDzeEebXH9mn0Zw8s3q_P0icZ_5kKm8Nw"
        />
      </Head>
      <div className="container">
        <Header />
        {/* <DefaultSeo {...SEO} /> */}
        <Component {...pageProps} />
        <Footer />
        <ScrollToTop
          showUnder={800}
          duration={500}
          style={{
            bottom: '180px',
            right: '30px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            padding: '10px',
            boxShadow: '1px 1px 10px 2px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span className="scrollToTop"></span>
        </ScrollToTop>
      </div>
    </ErrorBoundary>
  );
}

export default MyApp;
