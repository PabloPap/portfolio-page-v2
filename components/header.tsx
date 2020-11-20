import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li>
            <Link href="/">
              <a>Resume</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>GitHub</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>LinkedIn</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
