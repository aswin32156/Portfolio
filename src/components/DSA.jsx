import { useEffect, useRef } from 'react';

const dataStructures = [
  'Arrays', 'Strings', 'ArrayList', 'Linked Lists', 'Stack', 'Queue',
  'Priority Queue', 'Trees', 'Graphs', 'Heap', 'Trie', 'HashMap', 'HashSet',
];

const algorithms = [
  'Searching', 'Sorting', 'BFS', 'DFS', 'Dijkstra',
  'Dynamic Programming', 'Backtracking', 'Matrix Traversal', 'Permutations', 'Subset Sum',
];

export default function DSA() {
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
    <section id="dsa" ref={ref} className="section-alt">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Problem Solving</div>
          <h2 className="section-title">DSA & Algorithms</h2>
          <p className="section-desc">
            Strengthening problem-solving skills using Java through data structures and algorithmic thinking.
          </p>
        </div>

        <div className="dsa-grid">
          <div className="dsa-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="dsa-card-title">
              <span>🏗️</span>
              Data Structures
            </div>
            <div className="dsa-tags">
              {dataStructures.map((ds) => (
                <span key={ds} className="dsa-tag">{ds}</span>
              ))}
            </div>
          </div>

          <div className="dsa-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="dsa-card-title">
              <span>⚡</span>
              Algorithms
            </div>
            <div className="dsa-tags">
              {algorithms.map((algo) => (
                <span key={algo} className="dsa-tag">{algo}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="dsa-desc reveal" style={{ transitionDelay: '0.3s' }}>
          <span style={{ color: 'var(--accent-cyan)', marginRight: '10px' }}>💡</span>
          Currently strengthening my Data Structures and Algorithms skills using Java and practicing
          problem-solving through coding challenges. Focused on building a strong algorithmic
          foundation for software development roles.
        </div>

        {/* Practice Platform Indicators */}
        <div className="reveal" style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', transitionDelay: '0.4s' }}>
          {[
            { icon: '🔵', name: 'LeetCode', note: 'Practicing' },
            { icon: '🟠', name: 'HackerRank', note: 'Practicing' },
            { icon: '🟢', name: 'GeeksforGeeks', note: 'Learning' },
          ].map((p) => (
            <div key={p.name} className="dsa-platform-card">
              <span>{p.icon}</span>
              <span className="dsa-platform-name">{p.name}</span>
              <span className="dsa-platform-status">{p.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
