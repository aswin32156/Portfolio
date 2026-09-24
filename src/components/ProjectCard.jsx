export default function ProjectCard({ project }) {
  const { name, icon, desc, tech, features, outcome, badges, github, demo, filter } = project;

  return (
    <div className={`project-card`} data-filter={filter}>
      <div className="project-header">
        <div className="project-badge-row">
          {badges.map((b) => (
            <span key={b.label} className={`project-badge badge-${b.type}`}>{b.label}</span>
          ))}
        </div>
        <div className="project-icon">{icon}</div>
        <h3 className="project-name">{name}</h3>
        <p className="project-desc">{desc}</p>
      </div>

      <div className="project-body">
        <div className="project-tech">
          {tech.map((t) => (
            <span key={t} className="tech-chip">{t}</span>
          ))}
        </div>

        {features && features.length > 0 && (
          <div className="project-features">
            <div className="project-features-title">Key Features</div>
            <ul className="feature-list">
              {features.map((f) => (
                <li key={f} className="feature-item">{f}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-outcome">
          "{outcome}"
        </div>
      </div>

      <div className="project-footer">
        <a
          href={github || '#'}
          target={github ? '_blank' : '_self'}
          rel="noreferrer"
          className="proj-btn proj-btn-github"
          onClick={!github ? (e) => e.preventDefault() : undefined}
          style={!github ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          {github ? 'View Code' : 'Private Repo'}
        </a>
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="proj-btn proj-btn-demo">
            ↗ Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
