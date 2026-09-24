import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — connect to your backend/email service
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let's Build Something Together 🚀</h2>
        </div>

        <div className="contact-grid">
          {/* Left */}
          <div className="contact-info reveal">
            <p className="contact-desc">
              I'm always interested in learning, building software, and exploring opportunities
              in software development. Feel free to reach out!
            </p>

            <a href="mailto:aswinsaravanan564@gmail.com" className="contact-item">
              <div className="contact-item-icon">✉️</div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">aswinsaravanan564@gmail.com</div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/aswin-s-9522b32a3/" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-item-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <div className="contact-item-label">LinkedIn</div>
                <div className="contact-item-value">linkedin.com/in/aswin-s-9522b32a3/</div>
              </div>
            </a>

            <a href="https://github.com/aswin32156" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-item-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div>
                <div className="contact-item-label">GitHub</div>
                <div className="contact-item-value">github.com/aswin32156</div>
              </div>
            </a>

            <div className="contact-item" style={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div className="contact-item-icon">📄</div>
                <div>
                  <div className="contact-item-label">Resume / CV</div>
                  <div className="contact-item-value">Aswin S — Resume.pdf</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="cert-btn"
                  id="view-resume-contact-btn"
                >
                  View Resume ↗
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="cert-btn"
                  style={{
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    color: 'var(--text-secondary)'
                  }}
                  title="Download Resume PDF"
                  aria-label="Download Resume"
                >
                  ↓
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <form className="contact-form reveal" style={{ transitionDelay: '0.15s' }} onSubmit={handleSubmit}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '24px' }}>
              Send a Message
            </h3>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="form-input"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Your message..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="form-submit" id="contact-submit-btn">
              {sent ? '✅ Message Sent!' : '🚀 Send Message'}
            </button>

            {sent && (
              <p style={{ marginTop: '12px', textAlign: 'center', fontSize: '0.82rem', color: 'var(--accent-cyan)' }}>
                Thank you! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
