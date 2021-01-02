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
              <Link href="/Pavlos-Papadopoulos-Resume-2021.pdf">
                <a onClick={changeOpenNav}>Resume</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a onClick={changeOpenNav}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/PabloPap">
                <a onClick={changeOpenNav}>GitHub</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/papadopoulospavlos/">
                <a onClick={changeOpenNav}>LinkedIn</a>
              </Link>
            </li>
          </ul>

          <Burger
            onHandleToggleClasses={handleToggleClasses}
            onChangeOpenNav={changeOpenNav}
          />
        </nav>
      </header>
      <div className="container__side--white"></div>
    </>
  );
};

export default Header;
