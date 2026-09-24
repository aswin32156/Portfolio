import { useEffect, useRef } from 'react';

export default function Education() {
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
    <section id="education" ref={ref} style={{ background: 'rgba(13,18,32,0.5)' }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Education</div>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="education-card reveal">
          <div className="edu-header">
            <div className="edu-icon">🎓</div>
            <div>
              <div className="edu-institution">K. Ramakrishnan College of Engineering (Autonomous)</div>
              <div className="edu-location">📍 Samayapuram, Trichy, Tamil Nadu</div>
              <div className="edu-degree">Bachelor of Engineering — Computer Science and Engineering</div>
            </div>
          </div>

          <div className="edu-meta">
            <div className="edu-meta-item">
              <span>🏛️</span>
              <span>Affiliated to <strong>Anna University, Chennai</strong></span>
            </div>
            <div className="edu-meta-item">
              <span>📅</span>
              <span>Status: <strong>Final Year</strong></span>
            </div>
            <div className="edu-meta-item">
              <span>📌</span>
              <span>Autonomous Institution</span>
            </div>
          </div>

          {/* Core subjects */}
          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '14px', fontFamily: 'var(--font-mono)' }}>
              Key Subjects
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                'Data Structures & Algorithms',
                'Object-Oriented Programming',
                'Database Management Systems',
                'Operating Systems',
                'Computer Networks',
                'Software Engineering',
                'Web Technologies',
                'Java Programming',
              ].map(s => (
                <span key={s} style={{
                  fontSize: '0.8rem',
                  padding: '5px 12px',
                  background: 'rgba(59,130,246,0.08)',
                  border: '1px solid rgba(59,130,246,0.18)',
                  borderRadius: '8px',
                  color: 'var(--text-secondary)',
                }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
