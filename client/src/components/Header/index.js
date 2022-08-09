import { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { TokenContext } from '../UserContext';
import Button from '@mui/material/Button';
import './Header.scss';

export default function Header() {
  const { accessToken, setAccessToken } = useContext(TokenContext);

  return (
  
    <div className="header">
      <nav>
        <Button color='secondary'>
        <NavLink to="/" className="navbar-brand" end>
          <h2>final project</h2>
        </NavLink>
        </Button>
        
        <ul className="navbar-nav">
        <Button color='secondary'>
          <li className="nav-item">
            
            <NavLink to="login" className="nav-link">
              Sign in
            </NavLink>
            
          </li>
          </Button>
          
            <Button color='secondary'>
            <li className="nav-item">
            <NavLink to="register" className="nav-link">
              Register
            </NavLink>
            </li>
            </Button>
          
          <Button color='secondary'>
          <li className="nav-item">
            <NavLink to="chat" className="nav-link">
              Chat
            </NavLink>
          </li>
          </Button>
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
