import React, { useState } from 'react';
import Link from 'next/link';
import Burger from './mobileHeader/burger';

const Header = () => {
  const [open, setOpen] = useState(false);

  const changeOpenNav = () => {
    setOpen(!open);
  };

  const handleToggleClasses = () => {
    let classes = '';

    if (open) classes += ' active';

    return classes;
  };

  return (
    <>
      <div className="container__side--header"></div>

      <header className="header">
        <nav className="header__nav">
          <ul className={`header__nav--list ` + handleToggleClasses()}>
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

          <Burger onChangeOpenNav={changeOpenNav} />
        </nav>
      </header>
      <div className="container__side--white"></div>
    </>
  );
};

export default Header;
