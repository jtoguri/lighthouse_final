import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <Link href="/">
          <a className="navbar-brand"><h2>final project</h2></a>
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/login">
              <a className="nav-link">Sign in</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/register">
              <a className="nav-link">Register</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
