import Link from "next/link";

export default () => {
  return (
  <header>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
            <li>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
            <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
            <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </header>
  )

};