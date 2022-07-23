import { NavLink } from "react-router-dom";

import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <nav>
        <NavLink to="/" className="navbar-brand" end>
          <h2>final project</h2>
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="login" className="nav-link">
              Sign in
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="register" className="nav-link">
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
