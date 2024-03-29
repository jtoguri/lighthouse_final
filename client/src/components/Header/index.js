import { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { TokenContext } from '../UserContext';

import './Header.scss';

export default function Header() {
  const { accessToken, setAccessToken } = useContext(TokenContext);
  
  const handleLogout = (e) => {
    e.preventDefault();
    setAccessToken("");
    sessionStorage.setItem("token", "");
  }

  return (
    <div className="header">
      <nav>
        <NavLink to="/" className="navbar-brand" end>
          Equipshare
        </NavLink>
        <ul className="navbar-nav">
          {!accessToken &&
            <li className="nav-item">
              <NavLink to="login" className="nav-link">
                Sign in
              </NavLink>
            </li>}
          {!accessToken &&
            <li className="nav-item">
              <NavLink to="register" className="nav-link">
                Register
              </NavLink>
            </li>}
          {accessToken &&
          <li className="nav-item">
            <NavLink to="bookings" className="nav-link">
              My Bookings
            </NavLink>
          </li>}
          {accessToken &&
            <a href="logout" className="nav-link">
              <li onClick={handleLogout} className="nav-item">
                  Logout
              </li>
            </a>}
          {/*<li className="nav-item">
            <NavLink to="chat" className="nav-link">
              Chat
            </NavLink>
          </li>*/}
          {accessToken &&
            <NavLink to="chat" className="nav-link">
              <li className="nav-item">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  version="1.1" 
                  id="Layer_1" 
                  x="0px" 
                  y="0px" 
                  viewBox="0 0 458 458" 
                >
                  <g>
                    <path
                    d="M428,41.534H30c-16.569,0-30,13.431-30,30v252c0,16.568,13.432,30,30,30h132.1l43.942,52.243 c5.7,6.777,14.103,10.69,22.959,10.69c8.856,0,17.258-3.912,22.959-10.69l43.942-52.243H428c16.568,0,30-13.432,30-30v-252 C458,54.965,444.568,41.534,428,41.534z M323.916,281.534H82.854c-8.284,0-15-6.716-15-15s6.716-15,15-15h241.062 c8.284,0,15,6.716,15,15S332.2,281.534,323.916,281.534z M67.854,198.755c0-8.284,6.716-15,15-15h185.103c8.284,0,15,6.716,15,15 s-6.716,15-15,15H82.854C74.57,213.755,67.854,207.039,67.854,198.755z M375.146,145.974H82.854c-8.284,0-15-6.716-15-15 s6.716-15,15-15h292.291c8.284,0,15,6.716,15,15C390.146,139.258,383.43,145.974,375.146,145.974z"></path>
                  </g>
                </svg>
              </li>
            </NavLink>}
        </ul>
      </nav>
    </div>
  );
}
