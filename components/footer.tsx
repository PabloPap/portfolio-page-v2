const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">I'd love to hear from you</p>
      <div className="footer__connect">
        <div className="footer__connect--links">
          <a href="">Email</a>
          <div className="footer__connect--line"></div>
          <a href="">Connect on LinkedIn</a>
        </div>
        <div className="footer__connect--social">
          <a href="https://github.com/PabloPap">
            <svg>
              <use xlinkHref="/img/sprite.svg#github" />
            </svg>
          </a>
          <a href="https://twitter.com/pixel_sniffer">
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
