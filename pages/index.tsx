import Header from '../components/header';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="hero">
        <p className="hero__par">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          reprehenderit inventore animi consectetur, explicabo nostrum
          cupiditate esse.
        </p>
        <div className="hero__links">
          <a href="#">Browse projects</a>
          <a href="#">Alittle about me</a>
        </div>
      </div>

      <div className="projects">
        <div className="projects__card">
          <img className="projects__card--img" src="" alt="project" />
          <p className="projects__card--description"></p>
        </div>
        <div className="projects__card">
          <img className="projects__card--img" src="" alt="project" />
          <p className="projects__card--description"></p>
        </div>
        <div className="projects__card">
          <img className="projects__card--img" src="" alt="project" />
          <p className="projects__card--description"></p>
        </div>
      </div>

      <div className="about">
        <div className="about__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            eaque possimus deleniti ex maiores. Sequi temporibus dignissimos
            mollitia rerum officia. Maiores.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            molestiae cumque praesentium illum quidem ut laudantium delectus
            fugit animi sit. In voluptates molestias voluptatem tenetur hic
            dignissimos distinctio explicabo nobis!
          </p>
        </div>
        <div className="about__images">
          <img src="" alt="about me" />
          <img src="" alt="about me" />
          <img src="" alt="about me" />
        </div>
      </div>
      <div className="about">
        <div className="about__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            eaque possimus deleniti ex maiores. Sequi temporibus dignissimos
            mollitia rerum officia. Maiores.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            molestiae cumque praesentium illum quidem ut laudantium delectus
            fugit animi sit. In voluptates molestias voluptatem tenetur hic
            dignissimos distinctio explicabo nobis!
          </p>
        </div>
        <div className="about__images">
          <img src="" alt="about me" />
          <img src="" alt="about me" />
          <img src="" alt="about me" />
        </div>
      </div>
      <div className="about">
        <div className="about__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            eaque possimus deleniti ex maiores. Sequi temporibus dignissimos
            mollitia rerum officia. Maiores.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            molestiae cumque praesentium illum quidem ut laudantium delectus
            fugit animi sit. In voluptates molestias voluptatem tenetur hic
            dignissimos distinctio explicabo nobis!
          </p>
        </div>
        <div className="about__images">
          <img src="" alt="about me" />
          <img src="" alt="about me" />
          <img src="" alt="about me" />
        </div>
      </div>
    </div>
  );
};

export default Home;
