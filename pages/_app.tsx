import Footer from '../components/footer';
import Header from '../components/header';
import ScrollToTop from 'react-scroll-up';
import '../site.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTop
        showUnder={800}
        style={{
          bottom: '180px',
          right: '30px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          padding: '10px',
          boxShadow: '1px 1px 10px 2px rgba(0, 0, 0, 0.1)',
        }}
      >
        <span className="scrollToTop">
          {/* <img src="/img/iconfinder_arrow-top_4115227.svg" alt="" /> */}
        </span>
      </ScrollToTop>
    </div>
  );
}

export default MyApp;
