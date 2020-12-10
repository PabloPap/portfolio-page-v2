import Image from 'next/image';

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <h1 className="hero__container--par">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            reprehenderit inventore animi consectetur, explicabo nostrum
            cupiditate esse.
          </h1>
          <div className="hero__container--links">
            <a href="#">
              <span>Browse projects</span>
            </a>
            <a href="#">
              <span>A little about me</span>
            </a>
          </div>
        </div>
      </div>

      <div className="projects">
        <div className="projects__nav">
          <h2>Featured projects</h2>
          <div className="projects__nav--icon">
            <h3>All projects</h3>
            <p>image</p>
          </div>
        </div>
        <div className="projects__container">
          <div className="projects__card">
            <a href="#" className="grid-item">
              <div className="projects__card--img"></div>
              <div className="projects__card--hover"></div>
              <div className="projects__card--name">iAQUA</div>
            </a>
          </div>
          <div className="projects__card">
            <a href="#" className="grid-item">
              <div className="projects__card--img"></div>
              <div className="projects__card--hover"></div>
              <div className="projects__card--name">Ecodev Orange</div>
            </a>
          </div>
          <div className="projects__card">
            <a href="#" className="grid-item">
              <div className="projects__card--img"></div>
              <div className="projects__card--hover"></div>
              <div className="projects__card--name">Ecodev Green</div>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="container__side--left"></div> */}

      <div className="about">
        <div className="about__content">
          <p className="about__content--bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            eaque possimus deleniti ex maiores. Sequi temporibus dignissimos
            mollitia rerum officia. Maiores.
          </p>
          <p className="about__content--thin">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            molestiae cumque praesentium illum quidem ut laudantium delectus
            fugit animi sit. In voluptates molestias voluptatem tenetur hic
            dignissimos distinctio explicabo nobis!
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
      {/* <div className="container__side"></div> */}
    </>
  );
};

export default Home;
