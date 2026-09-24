import { useEffect, useRef } from 'react';

const aboutCards = [
  { icon: '☕', title: 'Java', desc: 'Primary Development Language' },
  { icon: '🌐', title: 'Full Stack', desc: 'Frontend + Backend + Database' },
  { icon: '🧩', title: 'DSA', desc: 'Problem Solving with Java' },
  { icon: '🛠️', title: 'Software Dev', desc: 'Building Practical Applications' },
];

const coreSkills = ['Java', 'OOP', 'Data Structures', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'MySQL', 'MongoDB', 'Git'];

export default function About() {
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
    <section id="about" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Who Am I?</h2>
        </div>

        <div className="about-grid">
          {/* ── Left ── */}
          <div className="about-text reveal" style={{ transitionDelay: '0.1s' }}>
            <p>
              I am <strong style={{ color: 'var(--text-primary)' }}>Aswin S</strong>, a final-year
              Computer Science and Engineering student with a strong foundation in Java,
              Object-Oriented Programming, Data Structures, DBMS, and software development.
            </p>
            <p>
              I enjoy transforming ideas into practical software applications and have worked on
              academic and personal projects involving Java, JavaScript, HTML, CSS,
              Bootstrap, MongoDB, MySQL, and SQLite.
            </p>
            <p>
              My primary interest is Java-based software development and full-stack application
              development. I am continuously improving my problem-solving skills and exploring
              modern software engineering technologies.
            </p>

            <div className="about-cards">
              {aboutCards.map((c) => (
                <div className="about-card" key={c.title}>
                  <div className="about-card-icon">{c.icon}</div>
                  <div className="about-card-title">{c.title}</div>
                  <div className="about-card-desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right ── */}
          <div className="about-right reveal" style={{ transitionDelay: '0.2s' }}>
            {/* Quick Info card */}
            <div className="info-block">
              <div className="info-block-title">Quick Info</div>
              {[
                { label: 'Name',       value: 'Aswin S' },
                { label: 'Role',       value: 'Java Developer / Full-Stack Dev' },
                { label: 'Status',     value: 'Final Year CSE Student', highlight: true },
                { label: 'Location',   value: 'Tamil Nadu, India' },
                { label: 'Focus',      value: 'Java + DSA + Full Stack' },
                { label: 'University', value: 'Anna University' },
                { label: 'Available',  value: 'Open to Opportunities', green: true },
              ].map(({ label, value, highlight, green }) => (
                <div className="info-row" key={label}>
                  <span className="info-label">{label}</span>
                  <span
                    className="info-value"
                    style={{
                      color: green ? '#22c55e' : highlight ? 'var(--accent-cyan)' : undefined
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Core Skills pills */}
            <div className="info-block">
              <div className="info-block-title">Core Skills</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '4px' }}>
                {coreSkills.map(s => (
                  <span
                    key={s}
                    style={{
                      fontSize: '0.8rem',
                      padding: '5px 13px',
                      background: 'rgba(0,212,255,0.07)',
                      border: '1px solid rgba(0,212,255,0.18)',
                      borderRadius: '20px',
                      color: 'var(--accent-cyan)',
                      fontWeight: '500',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
