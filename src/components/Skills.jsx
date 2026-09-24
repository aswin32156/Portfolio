import { useState, useEffect, useRef } from 'react';

const skillCategories = {
  'Programming': ['Java', 'Python', 'JavaScript', 'SQL'],
  'Java Development': ['Core Java', 'OOP', 'Data Structures', 'Collections', 'Exception Handling'],
  'Frontend': ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js'],
  'Backend': ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs'],
  'Databases': ['MySQL', 'SQLite', 'MongoDB'],
  'Tools': ['Git', 'GitHub', 'VS Code'],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Programming');
  const ref = useRef(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleTab = (tab) => {
    setActiveTab(tab);
    setKey(k => k + 1);
  };

  return (
    <section id="skills" ref={ref} style={{ background: 'rgba(13,18,32,0.5)' }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-desc">
            A curated set of technologies I've used across academic projects and personal development.
          </p>
        </div>

        <div className="reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="skills-tabs">
            {Object.keys(skillCategories).map((tab) => (
              <button
                key={tab}
                className={`skill-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="skills-grid" key={key}>
            {skillCategories[activeTab].map((skill, i) => (
              <div
                className="skill-badge"
                key={skill}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="skill-badge-dot" />
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* All Skills Overview */}
        <div className="reveal" style={{ marginTop: '60px', transitionDelay: '0.2s' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '24px' }}>
            All Technologies at a Glance
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
            {Object.entries(skillCategories).map(([cat, skills]) => (
              <div
                key={cat}
                className="glass-card"
                style={{ padding: '20px', transition: 'all 0.3s ease', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-glass)'}
              >
                <div style={{
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  color: 'var(--accent-cyan)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {cat}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {skills.map(s => (
                    <span key={s} style={{
                      fontSize: '0.78rem',
                      padding: '3px 8px',
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: '6px',
                      color: 'var(--text-secondary)',
                      border: '1px solid rgba(255,255,255,0.06)'
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
