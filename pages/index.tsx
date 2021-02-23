// import Image from 'next/image';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <h1 className="hero__container--par">
            I'm Pavlos Papadopoulos, a Front-End Developer with industry
            experience building websites and web applications.
          </h1>
          <div className="hero__container--links">
            <Link to="projects" smooth={true} duration={1000} offset={-100}>
              <span>Browse projects</span>
            </Link>
            <Link to="about" smooth={true} duration={1000}>
              <span>Few words about me</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="projects" id="projects">
        <div className="projects__nav">
          <h2>Featured projects</h2>
          {/* <div className="projects__nav--icon">
            <h3>All projects</h3>
            <p>image</p>
          </div> */}
        </div>
        <div className="projects__container">
          <div className="projects__container--column">
            <div className="projects__card">
              <a
                aria-label="project"
                href="https://time-machine-app.herokuapp.com/"
              >
                <div className="projects__card--img one"></div>
                <div className="projects__card--hover"></div>
                <div className="projects__card--name">Time Machine</div>
              </a>
            </div>
            <div className="projects__descr">
              <ul className="projects__descr--title">
                <li>
                  A React app that a user interact with a datepicker to create
                  text cards based on dates
                </li>
              </ul>
              <ul className="projects__descr--tags">
                <li>React.js</li>
                <li>Sass</li>
              </ul>
            </div>
          </div>

          <div className="projects__container--column">
            <div className="projects__card">
              <a
                aria-label="project"
                href="https://video-finder-app.herokuapp.com/"
              >
                <div className="projects__card--img two"></div>
                <div className="projects__card--hover"></div>
                <div className="projects__card--name">Video Finder</div>
              </a>
            </div>
            <div className="projects__descr">
              <ul className="projects__descr--title">
                <li>
                  A React app that talks to the youtube API and returns videos
                  based on user's search results
                </li>
              </ul>
              <ul className="projects__descr--tags">
                <li>React.js</li>
                <li>Youtube API</li>
              </ul>
            </div>
          </div>
          <div className="projects__container--column">
            <div className="projects__card">
              <a aria-label="project" href="https://glob-taste.netlify.app/">
                <div className="projects__card--img three"></div>
                <div className="projects__card--hover"></div>
                <div className="projects__card--name">Glob Taste</div>
              </a>
            </div>
            <div className="projects__descr">
              <ul className="projects__descr--title">
                <li>A sample layout for a landing page using CSS Grid</li>
              </ul>
              <ul className="projects__descr--tags">
                <li>Sass</li>
                <li>CSS grid</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container__side--about"></div>

      <div className="about" id="about">
        <div className="about__content">
          <p className="about__content--bold">
            I'm a skilled and motivated professional who likes to code things
            from scratch by translating UX/UI designs into fully functional
            solutions.
          </p>
          <p className="about__content--thin">
            I speak HTML / CSS / JavaScript and use frameworks and tools based
            on the project specifications. Always maintain updated knowledge of
            new trends and technology.
          </p>
        </div>
        <div className="about__images composition">
          <div className="composition__photo composition__photo--p1">
            {/* <Image
              src="/img/office-large.png"
              layout="responsive"
              width={1000}
              height={667}
              alt="about me"
            /> */}
            <img src="/img/office.png" alt="about me" />
          </div>
          <div className="composition__photo composition__photo--p2">
            {/* <Image
              src="/img/coffee-large.png"
              layout="responsive"
              width={1000}
              height={667}
              alt="about me"
            /> */}
            <img src="/img/coffee.png" alt="about me" />
          </div>

          <div className="composition__photo composition__photo--p3">
            {/* <Image
              src="/img/ideas-large.png"
              layout="responsive"
              width={1000}
              height={667}
              alt="about me"
            /> */}
            <img src="/img/ideas.png" alt="about me" />
          </div>
        </div>
      </div>
      <div className="container__side"></div>
    </>
  );
};

export default Home;
