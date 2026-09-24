import { useEffect, useRef } from 'react';

const journeySteps = [
  {
    icon: '🖥️',
    step: 'Step 01',
    title: 'Programming Fundamentals',
    desc: 'Learned the core concepts of programming — variables, loops, conditionals, functions, and logic building.',
  },
  {
    icon: '☕',
    step: 'Step 02',
    title: 'Java & Object-Oriented Programming',
    desc: 'Mastered Java syntax, OOP principles — encapsulation, inheritance, polymorphism, abstraction, and class design.',
  },
  {
    icon: '🧩',
    step: 'Step 03',
    title: 'Data Structures & Algorithms',
    desc: 'Explored core data structures including arrays, linked lists, stacks, queues, trees, graphs, and hash maps using Java.',
  },
  {
    icon: '🗄️',
    step: 'Step 04',
    title: 'Database Development',
    desc: 'Learned relational databases with MySQL, SQLite, and NoSQL with MongoDB. Practiced JDBC for Java-DB connectivity.',
  },
  {
    icon: '🌐',
    step: 'Step 05',
    title: 'Web Development',
    desc: 'Built frontend interfaces using HTML, CSS, JavaScript, Bootstrap and started exploring React.js for dynamic UIs.',
  },
  {
    icon: '⚡',
    step: 'Step 06',
    title: 'Full-Stack Development',
    desc: 'Connected frontend, backend, and databases. Developed complete applications using Node.js, Express.js, and MongoDB.',
  },
  {
    icon: '🚀',
    step: 'Step 07',
    title: 'Spring Boot & REST APIs',
    desc: 'Exploring Java-based backend development with Spring Boot — REST API design, dependency injection, and MVC architecture.',
  },
];

export default function DevelopmentJourney() {
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
    <section id="journey" ref={ref} style={{ background: 'rgba(13,18,32,0.5)' }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Development Journey</div>
          <h2 className="section-title">My Technical Growth</h2>
          <p className="section-desc">
            A timeline of continuous learning — from programming basics to full-stack development.
          </p>
        </div>

        <div className="journey-timeline">
          {journeySteps.map((step, i) => (
            <div
              className="journey-item reveal"
              key={step.title}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="journey-marker">{step.icon}</div>
              <div className="journey-content">
                <div className="journey-step">{step.step}</div>
                <div className="journey-title">{step.title}</div>
                <div className="journey-desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
