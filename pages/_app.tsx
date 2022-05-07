import Footer from '../components/footer';
import Header from '../components/header';
import ScrollToTop from 'react-scroll-up';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import '../site.scss';
import ErrorBoundary from '../components/ErrorBoundary';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      {/* <ErrorBoundary> */}
      <Header />
      <DefaultSeo {...SEO} />
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
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default MyApp;
