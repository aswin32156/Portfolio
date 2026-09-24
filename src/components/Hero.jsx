import { useState, useEffect } from 'react';

const roles = [
  'Java Developer',
  'Full-Stack Developer',
  'Problem Solver',
  'CSE Student',
];

function useTypingEffect(words, typeSpeed = 80, deleteSpeed = 40, pauseTime = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIdx];
    let timer;

    if (!isDeleting) {
      if (charIdx < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayed(currentWord.slice(0, charIdx + 1));
          setCharIdx(prev => prev + 1);
        }, typeSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (charIdx > 0) {
        timer = setTimeout(() => {
          setDisplayed(currentWord.slice(0, charIdx - 1));
          setCharIdx(prev => prev - 1);
        }, deleteSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIdx(prev => (prev + 1) % words.length);
          setCharIdx(0);
          setDisplayed('');
        }, 350);
      }
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, wordIdx, words, typeSpeed, deleteSpeed, pauseTime]);

  return displayed;
}

export default function Hero() {
  const role = useTypingEffect(roles);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>

      <div className="container relative-z">
        <div className="hero-two-col">

          {/* ══ LEFT — Text Content ══ */}
          <div className="hero-left-col">

            {/* Welcome label */}
            <div className="hero-welcome-label">
              <span className="hero-welcome-line" />
              WELCOME
            </div>

            {/* Main heading */}
            <h1 className="hero-heading">
              <span className="hero-heading-plain">Hi, I'm</span>
              <br />
              <span className="hero-heading-name gradient-text">Aswin S</span>
            </h1>

            {/* Typing role */}
            <p className="hero-typing-role">
              I am a <span className="hero-typing-highlight">{role}</span>
              <span className="typing-cursor" />
            </p>

            {/* Description */}
            <p className="hero-two-desc">
              I build practical software solutions using Java &amp; modern web technologies.
              Final-year CSE student continuously learning, building projects, and preparing for
              software development opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="hero-two-actions">
              <a
                href="#projects"
                className="hero-btn-filled"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('projects');
                }}
                id="hero-view-projects-btn"
              >
                VIEW MY PROJECTS
              </a>
              <a
                href="#contact"
                className="hero-btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                id="hero-get-in-touch-btn"
              >
                GET IN TOUCH
              </a>
            </div>

            {/* Social icon buttons */}
            <div className="hero-social-icons">
              <a href="https://github.com/aswin32156" target="_blank" rel="noreferrer" className="hero-icon-btn" aria-label="GitHub">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/aswin-s-9522b32a3/" target="_blank" rel="noreferrer" className="hero-icon-btn" aria-label="LinkedIn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:aswinsaravanan564@gmail.com" className="hero-icon-btn" aria-label="Email">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ══ RIGHT — Profile Photo ══ */}
          <div className="hero-right-col">
            <div className="hero-photo-wrap">
              {/* Decorative outer ring */}
              <div className="hero-photo-ring" />
              {/* Decorative dots */}
              <div className="hero-photo-dot hero-photo-dot-1" />
              <div className="hero-photo-dot hero-photo-dot-2" />
              {/* Photo */}
              <div className="hero-photo-circle">
                <img
                  src="/new ps.jpeg"
                  alt="Aswin S"
                  className="hero-photo-img"
                />
              </div>
              {/* Badge */}
              <div className="hero-photo-badge">
                <span>AS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
