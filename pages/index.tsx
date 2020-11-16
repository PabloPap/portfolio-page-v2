import Header from '../components/header';

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <h1>my home page</h1>
        <div className="home__cards">
          <div className="home__cards--card">
            <a href="#">link 1</a>
          </div>
          <div className="home__cards--card">
            <a href="#">link 2</a>
          </div>
          <div className="home__cards--card">
            <a href="#">link3</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
