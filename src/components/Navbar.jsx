import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const links = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <span className="nav-logo" onClick={() => scrollTo('home')}>
            &lt;Aswin /&gt;
          </span>
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  className={`nav-link ${activeSection === l.id ? 'active' : ''}`}
                  onClick={() => scrollTo(l.id)}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            download
            className="nav-resume-btn desktop"
          >
            Download Resume ↓
          </a>

          {/* Dark / Light toggle */}
          <button
            className="theme-toggle-btn"
            onClick={toggle}
            aria-label="Toggle dark/light mode"
            title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {dark ? (
              /* Sun icon — switch to light */
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              /* Moon icon — switch to dark */
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            )}
          </button>
          <button
            className={`hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <button
            key={l.id}
            className={`nav-link ${activeSection === l.id ? 'active' : ''}`}
            onClick={() => scrollTo(l.id)}
            style={{ textAlign: 'left', width: '100%' }}
          >
            {l.label}
          </button>
        ))}
        <a
          href="/resume.pdf"
          download
          className="nav-resume-btn"
          style={{ marginTop: '8px', textAlign: 'center' }}
          onClick={() => setMobileOpen(false)}
        >
          Download Resume ↓
        </a>
      </div>
    </>
  );
}
