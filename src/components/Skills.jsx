import { SKILLS, CERTIFICATIONS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container">
        <p className="section-label">Technical profile</p>
        <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>
          Skills & Certifications
        </h2>

        <div style={{ display: "grid", gap: "1.75rem" }}>
          {SKILLS.map(({ category, items }) => (
            <div key={category}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#252525", marginBottom: "10px", color: "#555" }}>
                {category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {items.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #252525", marginTop: "3.5rem", paddingTop: "3rem" }}>
          <p className="section-label">Credentials</p>
          <h3 className="section-title" style={{ fontSize: "1.3rem", marginBottom: "1.5rem" }}>
            Certifications
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px" }}>
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="cert-item">
                <div className="cert-icon">{cert.abbr}</div>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: "#f0ece6" }}>{cert.name}</p>
                  <p style={{ fontSize: "11px", color: "#8a8a8a", marginTop: "2px" }}>{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
