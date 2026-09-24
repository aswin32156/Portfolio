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
    <section id="education" ref={ref} className="section-alt">
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
          <div className="edu-subjects-box">
            <div className="edu-subjects-title">
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
                <span key={s} className="edu-subject-chip">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
