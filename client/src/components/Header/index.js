import { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { TokenContext } from '../UserContext';

import './Header.scss';

export default function Header() {
  const { accessToken, setAccessToken } = useContext(TokenContext);

  return (
    <div className="header">
      <nav>
        <NavLink to="/" className="navbar-brand" end>
          <h2>Equipshare</h2>
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
          <li className="nav-item">
            <NavLink to="chat" className="nav-link">
              Chat
            </NavLink>
          </li>
          {accessToken &&
            <li>
              logged in
            </li>
          }
        </ul>
      </nav>
    </div>
  );
}
