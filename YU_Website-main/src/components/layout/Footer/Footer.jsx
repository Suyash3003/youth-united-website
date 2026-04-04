import React from 'react';
import FooterBrand from './FooterBrand';
import navLinks from '../../../data/navigation';
import { usePage } from '../../../context/PageContext';
import './Footer.css';

export default function Footer() {
  const { setCurrentPage } = usePage();
  const handleNav = (id) => { setCurrentPage(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <FooterBrand />
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {navLinks.map(link => (
                <li key={link.id}>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleNav(link.id); }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Work</h4>
            <ul>
              {['Education','Environment','Health & Welfare','Digital Literacy','Community Outreach'].map(w => (
                <li key={w}><a href="#">{w}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:Yu@thapar.edu">Yu@thapar.edu</a></li>
              <li><a href="tel:+916392092199">+91 63920 92199</a></li>
              <li><a href="#">Thapar Institute, Patiala</a></li>
              <li><a href="#">Punjab, India 147004</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>2026 <span>Youth United Patiala Chapter</span>. All rights reserved.</div>
          <div>Made with <span>♥</span> at Thapar Institute</div>
        </div>
      </div>
    </footer>
  );
}
