import React, { useState } from 'react';
import NavLogo from './NavLogo';
import MobileMenu from './MobileMenu';
import navLinks from '../../../data/navigation';
import { usePage } from '../../../context/PageContext';
import { useNavbarScroll } from '../../../hooks/useNavbarScroll';
import './Navbar.css';

export default function Navbar() {
  const { currentPage, navigateTo } = usePage();
  const scrolled = useNavbarScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    navigateTo(id);
  };

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <NavLogo onClick={() => handleNav('home')} />
        <div className="nav-links">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.path}
              className={`${currentPage === link.id ? 'active' : ''} ${link.cta ? 'nav-cta' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNav(link.id); }}
            >
              {link.cta ? <><i className="fa-solid fa-arrow-right"></i> {link.label}</> : link.label}
            </a>
          ))}
        </div>
        <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(v => !v)} />
      </nav>
    </>
  );
}
