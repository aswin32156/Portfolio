import { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const filters = ['All', 'Java', 'Full Stack', 'Web', 'UI/UX'];

const projects = [
  {
    id: 1,
    name: 'Malligai Garlands',
    icon: '🌺',
    filter: ['full-stack', 'web'],
    badges: [{ label: 'Full Stack', type: 'full-stack' }, { label: 'Web', type: 'web' }],
    desc: 'Modern e-commerce platform for pre-ordering handcrafted flower garlands with custom pickup scheduling and instant UPI payments.',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Razorpay', 'Zustand'],
    features: ['Curated garland catalog', 'Custom pickup scheduling', 'Razorpay & dynamic UPI payments', 'Digital receipt with counter QR', 'Real-time shop owner dashboard', 'Instant order audio alerts'],
    outcome: 'Engineered a modern garland pre-ordering web app connecting Supabase, Razorpay/UPI gateway, and live shop owner order chime.',
    github: 'https://github.com/aswin32156/Garland',
    demo: 'https://garland-lyart.vercel.app/',
  },
  {
    id: 2,
    name: 'Online Flower Shop',
    icon: '🌸',
    filter: ['java', 'full-stack', 'web'],
    badges: [{ label: 'Java', type: 'java' }, { label: 'Full Stack', type: 'full-stack' }],
    desc: 'Full-stack e-commerce application for browsing and purchasing flowers online with admin and user portals.',
    tech: ['Java', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'SQLite', 'MySQL'],
    features: ['Admin authentication', 'User registration/login', 'Flower management', 'Shopping cart', 'Checkout flow', 'Database integration'],
    outcome: 'Built a complete e-commerce workflow connecting frontend, Java backend logic, and database operations.',
    github: 'https://github.com/aswin32156/Online_Flower_Shop',
    demo: null,
  },
  {
    id: 3,
    name: 'Music Synchronization App',
    icon: '🎵',
    filter: ['java', 'full-stack'],
    badges: [{ label: 'Java', type: 'java' }, { label: 'Concept', type: 'concept' }],
    desc: 'Real-time shared listening room where multiple users can synchronize media using a private room code.',
    tech: ['Java', 'WebSockets', 'APIs'],
    features: ['Create / Join room', 'Secret room code', 'Synchronized playback', 'Queue & Lyrics', 'Listener count', 'Chat module'],
    outcome: 'Designed a real-time synchronization concept combining room management, media control, and multi-user interaction.',
    github: 'https://github.com/aswin32156/Music_sync',
    demo: null,
  },
  {
    id: 4,
    name: 'Job Board System',
    icon: '💼',
    filter: ['full-stack', 'web'],
    badges: [{ label: 'Full Stack', type: 'full-stack' }, { label: 'Web', type: 'web' }],
    desc: 'Job platform connecting candidates and employers with role-based workflows and MongoDB data management.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    features: ['Candidate module', 'Employer module', 'Job posting', 'Resume upload', 'Job applications', 'Application tracking'],
    outcome: 'Developed a backend-driven job platform with role-based workflows and MongoDB data management.',
    github: 'https://github.com/aswin32156/job_board_system',
    demo: null,
  },
  {
    id: 5,
    name: 'Smart Parking System',
    icon: '🅿️',
    filter: ['java'],
    badges: [{ label: 'Java', type: 'java' }],
    desc: 'Desktop parking management application built with Java OOP and Swing for monitoring parking availability and vehicle movement.',
    tech: ['Java', 'OOP', 'Swing', 'Java Collections'],
    features: ['Parking slot management', 'Vehicle entry & removal', 'Availability tracking', 'Parking status display', 'Fee calculation engine', 'Receipt generation'],
    outcome: 'Applied Java OOP concepts to build a functional parking management simulation.',
    github: null,
    demo: null,
  },
  {
    id: 6,
    name: 'Pet Adoption Platform',
    icon: '🐾',
    filter: ['web', 'uiux'],
    badges: [{ label: 'UI/UX Project', type: 'uiux' }, { label: 'Web', type: 'web' }],
    desc: 'User-focused platform concept for discovering, listing, and adopting pets with an intuitive interface design.',
    tech: ['HTML', 'CSS', 'JavaScript', 'UI/UX Design'],
    features: ['Pet catalog & filters', 'Adoption request flow', 'Shelter profile module', 'Search & categorization', 'User favorites list', 'Responsive modern UI'],
    outcome: 'Designed an intuitive interface focused on simple pet discovery and user interaction.',
    github: null,
    demo: null,
  },
];

const filterMap = {
  'All': 'all',
  'Java': 'java',
  'Full Stack': 'full-stack',
  'Web': 'web',
  'UI/UX': 'uiux',
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeKey = filterMap[activeFilter] || 'all';
  const visibleProjects = activeKey === 'all'
    ? projects
    : projects.filter(p => p.filter.includes(activeKey));

  const handleFilter = (f) => {
    setActiveFilter(f);
  };

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Projects</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Academic and personal projects demonstrating practical application of software development skills.
          </p>
        </div>

        <div className="project-filters reveal" style={{ transitionDelay: '0.1s' }}>
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => handleFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {visibleProjects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-muted)' }}>
            No projects match this filter.
          </div>
        ) : (
          <div className="projects-grid">
            {visibleProjects.map((project, i) => (
              <div
                className="project-grid-item"
                key={`${activeFilter}-${project.id}`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
