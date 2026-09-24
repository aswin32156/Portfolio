import { useEffect, useRef } from 'react';

const certifications = [
  {
    icon: '☁️',
    badge: 'Cloud Computing',
    badgeClass: 'badge-azure',
    name: 'Microsoft Certified: Azure Fundamentals',
    org: 'Microsoft Learn',
    year: '2025',
    desc: 'Demonstrates foundational understanding of cloud services, core Azure architectural components, security, compliance, governance, and cloud management.',
    credentials: [
      { label: 'Credential ID', value: '7CEC0149BEAC36AF' },
      { label: 'Certification No.', value: 'C3V51D-B6F5D3' },
    ],
    file: '/certificates/azure-cert.pdf',
  },
  {
    icon: '🇯🇵',
    badge: 'Language Proficiency',
    badgeClass: 'badge-japanese',
    name: 'Japanese Language NAT-TEST (Level Q5)',
    org: 'Japanese Language NAT-TEST Steering Committee',
    year: 'Feb 2026',
    desc: 'Official certification certifying foundational Japanese language capability equivalent to JLPT N5, covering Hiragana, Katakana, Kanji, grammar, and listening.',
    credentials: [
      { label: 'Examinee No.', value: '26020048250123' },
      { label: 'Test Site', value: 'Chennai, India' },
    ],
    file: '/certificates/nat-q5-cert.png',
  },
];

export default function Certifications() {
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
    <section id="certifications" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Certifications</div>
          <h2 className="section-title">Courses & Certifications</h2>
          <p className="section-desc">
            Verified credentials and language proficiencies demonstrating continuous technical and international learning.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <div
              className="cert-card reveal"
              key={i}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="cert-top-row">
                <div className="cert-icon">{cert.icon}</div>
                <span className={`cert-badge ${cert.badgeClass}`}>{cert.badge}</span>
              </div>

              <h3 className="cert-name">{cert.name}</h3>

              <div className="cert-meta">
                <span className="cert-org">🏛️ {cert.org}</span>
                <span className="cert-year">📅 {cert.year}</span>
              </div>

              <p className="cert-desc">{cert.desc}</p>

              <div className="cert-credential-box">
                {cert.credentials.map(c => (
                  <div key={c.label} className="cert-credential-item">
                    <span>{c.label}: </span>
                    <strong>{c.value}</strong>
                  </div>
                ))}
              </div>

              <div className="cert-footer">
                <div className="cert-verified">
                  <span>✓</span> Verified Credential
                </div>
                {cert.file && (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-btn"
                  >
                    View Certificate ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
