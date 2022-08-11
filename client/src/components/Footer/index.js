import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div>
          <h6 class="footer-heading text-uppercase text-white">Information</h6>
          <ul class="footer-link mt-4">
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">Our team</a>
            </li>
            <li>
              <a href="#!">Terms of Services</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 class="footer-heading text-uppercase text-white">Help</h6>
          <ul class="footer-link mt-4">
            <li>
              <NavLink to="register">Register</NavLink>
            </li>
            <li>
              <NavLink to="login">Sign in</NavLink>
            </li>
            <li>
              <a href="#!">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div class="footer-link">
          <h6 class="footer-heading text-uppercase text-white">Contact us</h6>
          <p class="contact-info mt-4">Need help?</p>
          <p class="contact-info">+X XXX-XXX-XXXX</p>
        </div>
      </div>
    </footer>
  );
}
