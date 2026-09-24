import { useEffect, useRef } from 'react';

export default function Experience() {
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
    <section id="experience" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Experience</div>
          <h2 className="section-title">Development Experience</h2>
        </div>

        <div className="experience-section">
          {/* Academic & Personal Development */}
          <div className="exp-card reveal">
            <div className="exp-card-header">
              <div className="exp-icon">💻</div>
              <div>
                <div className="exp-role">Academic & Personal Software Development</div>
                <div className="exp-org">Self-Directed Projects & Coursework</div>
                <div className="exp-period">2021 — Present</div>
              </div>
            </div>
            <ul className="exp-list">
              {[
                'Built software projects using Java, JavaScript, Node.js, and databases.',
                'Practiced object-oriented programming and database integration across multiple projects.',
                'Explored full-stack application architecture — frontend, backend, and data layer.',
                'Developed projects to strengthen practical software development skills.',
                'Implemented REST API concepts and explored Spring Boot framework.',
                'Applied Data Structures and Algorithms knowledge through coding challenges.',
              ].map((item) => (
                <li key={item}>
                  <span className="exp-bullet">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Placeholder for internship */}
          <div className="exp-card reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="exp-card-header">
              <div className="exp-icon" style={{ background: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.2)' }}>🏢</div>
              <div>
                <div className="exp-role">Internship / Work Experience</div>
                <div className="exp-org" style={{ color: 'rgba(245,158,11,0.8)' }}>— Placeholder —</div>
                <div className="exp-period">To be added</div>
              </div>
            </div>
            <div className="placeholder-note">
              Add your internship details here when available.<br />
              e.g., Company Name, Role, Duration, Key Contributions
            </div>
          </div>

          {/* Technical Highlights */}
          <div className="exp-card reveal" style={{ transitionDelay: '0.25s' }}>
            <div className="exp-card-header">
              <div className="exp-icon" style={{ background: 'rgba(139,92,246,0.1)', borderColor: 'rgba(139,92,246,0.2)' }}>🔧</div>
              <div>
                <div className="exp-role">Technical Skills Applied</div>
                <div className="exp-org">Across Projects & Coursework</div>
              </div>
            </div>
            <ul className="exp-list">
              {[
                'Java development — OOP, Data Structures, Collections, Exception Handling',
                'Frontend development — HTML, CSS, JavaScript, Bootstrap, React.js',
                'Backend APIs — Node.js, Express.js, REST design',
                'Database management — MySQL, SQLite, MongoDB',
                'Version control — Git & GitHub workflow',
                'Core CS fundamentals — Data Structures, Algorithms, DBMS, OS',
              ].map((item) => (
                <li key={item}>
                  <span className="exp-bullet">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
