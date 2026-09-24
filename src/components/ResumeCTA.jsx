import { useEffect, useRef } from 'react';

export default function ResumeCTA() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" ref={ref} style={{ background: 'rgba(13,18,32,0.5)' }}>
      <div className="container">
        <div className="resume-cta reveal">
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📄</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Want to know more about my experience?
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '0.97rem', lineHeight: '1.7' }}>
            Download my resume to explore my education, technical skills, projects,
            and professional experience in detail.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/resume.pdf" download className="btn-primary" style={{ fontSize: '0.95rem', padding: '14px 36px' }}>
              ↓ Download Resume
            </a>
            <a
              href="mailto:your.email@example.com"
              className="btn-secondary"
              style={{ fontSize: '0.95rem', padding: '14px 36px' }}
            >
              ✉ Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
