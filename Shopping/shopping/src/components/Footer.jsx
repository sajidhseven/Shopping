import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Brand */}
        <div className="footer-col">
          <h4>STORE</h4>
          <p>Minimal clothing made responsibly.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#!">About Us</a></li>
            <li><a href="#!">Shop</a></li>
            <li><a href="#!">Contact</a></li>
            <li><a href="#!">FAQs</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-col">
          <h5>Follow Us</h5>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} STORE. All rights reserved.</p>
      </div>
    </footer>
  );
}
