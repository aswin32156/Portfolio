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
    <section id="dsa" ref={ref} style={{ background: 'rgba(13,18,32,0.5)' }}>
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
            <div key={p.name} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-glass)',
              borderRadius: '10px',
              fontSize: '0.85rem',
            }}>
              <span>{p.icon}</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{p.name}</span>
              <span style={{
                fontSize: '0.72rem',
                padding: '2px 8px',
                background: 'rgba(0,212,255,0.08)',
                color: 'var(--accent-cyan)',
                borderRadius: '6px',
                border: '1px solid rgba(0,212,255,0.15)'
              }}>{p.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
