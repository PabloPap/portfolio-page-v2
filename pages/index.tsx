import Image from 'next/image';

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
            <a href="#">
              <span>Browse projects</span>
            </a>
            <a href="#">
              <span>Few words about me</span>
            </a>
          </div>
        </div>
      </div>

      <div className="projects">
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
              <a href="https://time-machine-app.herokuapp.com/">
                <div className="projects__card--img one"></div>
                <div className="projects__card--hover"></div>
                <div className="projects__card--name">Time Machine</div>
              </a>
            </div>
            <div className="projects__descr">
              <ul className="projects__descr--title">
                <li>
                  A React App that a user interact with a datepicker to create
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
              <a href="https://video-finder-app.herokuapp.com/">
                <div className="projects__card--img two"></div>
                <div className="projects__card--hover"></div>
                <div className="projects__card--name">Video Finder</div>
              </a>
            </div>
            <div className="projects__descr">
              <ul className="projects__descr--title">
                <li>Front-end development contribution as part of EXEO team</li>
              </ul>
              <ul className="projects__descr--tags">
                <li>Custom CMS</li>
                <li>Microsoft ASP.NET</li>
              </ul>
            </div>
          </div>
          <div className="projects__container--column">
            <div className="projects__card">
              <a href="https://glob-taste.netlify.app/">
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
                <li>Custom CMS</li>
                <li>Microsoft ASP.NET</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container__side--about"></div>

      <div className="about">
        <div className="about__content">
          <p className="about__content--bold">
            I'm a skilled and motivated professional who likes to code things
            from scratch by translating UX/UI designs into fully functional
            solutions.
          </p>
          <p className="about__content--thin">
            I speak HTML / CSS / Javascript and using frameworks and tools based
            on the project specifications. Always maintain updated knowledge of
            new trends and technology.
          </p>
        </div>
        <div className="about__images composition">
          <div className="composition__photo composition__photo--p1">
            <Image
              src="/img/office-large.png"
              layout="responsive"
              width={1000}
              height={667}
              alt="about me"
            />
          </div>
          <div className="composition__photo composition__photo--p2">
            <Image
              src="/img/coffee-large.png"
              layout="responsive"
              width={1000}
              height={667}
              alt="about me"
            />
          </div>

          <div className="composition__photo composition__photo--p3">
            <Image
              src="/img/ideas-large.png"
              layout="responsive"
              width={1000}
              height={667}
              alt="about me"
            />
          </div>
        </div>
      </div>
      <div className="container__side"></div>
    </>
  );
};

export default Home;
