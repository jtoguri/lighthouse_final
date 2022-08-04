import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import './Header.scss';
import IconTabs from "../IconTabs/Index";
export default function Header() {
  return (
    <div className="header">
      <nav>
      <Button color="secondary">Equipshare</Button>
       
        <ul className="navbar-nav">
        <Button color="secondary">About us</Button>
              
          <Button color="secondary">Log in</Button>
          
          <li className="nav-item">
          <Button color="secondary">Sign up</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
