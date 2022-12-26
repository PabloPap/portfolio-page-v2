const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">I'd love to hear from you</p>
      <div className="footer__connect">
        <div className="footer__connect--links">
          <a href="mailto:pavlospapadopou@gmail.com">Email</a>
          <div className="footer__connect--line"></div>
          <a href="https://www.linkedin.com/in/papadopoulospavlos/">
            Connect on LinkedIn
          </a>
        </div>
        <div className="footer__connect--social">
          <a aria-label="Github" href="https://github.com/PabloPap">
            <svg>
              <use xlinkHref="/img/sprite.svg#github" />
            </svg>
          </a>
          <a aria-label="Twitter" href="https://twitter.com/pixel_distro">
            <svg>
              <use xlinkHref="/img/sprite.svg#twitter" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
