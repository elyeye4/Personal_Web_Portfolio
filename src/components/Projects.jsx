import { CONTACT } from "../data";

const FEATURES = [
  { title: "Architecture", color: "#b8a082", desc: "Creational & Behavioral design patterns for a scalable, maintainable codebase." },
  { title: "Performance",  color: "#cc3333", desc: "Optimized memory usage and draw calls for stable 60 FPS on mid-range devices." },
  { title: "Cross-platform", color: "#8a8a8a", desc: "Targets both mobile and desktop with consistent visual quality." },
  { title: "Agile", color: "#8b0000", desc: "Full lifecycle — backlog, sprints, retrospectives — managed with Scrum." },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad-alt">
      <div className="container">
        <p className="section-label">Featured project</p>
        <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>
          Pig's Revenge
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div className="card" style={{ borderColor: "rgba(204, 51, 51, 0.3)" }}>
            <div style={{ background: "rgba(204,51,51,0.06)", borderRadius: 10, height: 170, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", fontSize: "4rem", border: "1px solid rgba(204,51,51,0.1)" }}>
              [IMG]
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1rem" }}>
              {["Unity", "C#", "Mobile", "Desktop", "Design Patterns"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <p style={{ fontSize: "13.5px", color: "#8a8a8a", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Commercial game built with Creational and Behavioral design patterns.
              Full Agile development lifecycle managed solo — from product backlog to sprint cadence.
            </p>

            <div className="award-badge" style={{ marginBottom: "1.25rem" }}>
              <span>[IMG]</span> Most Promising Game — VIT Awards by Expovit
            </div>

            <a href={CONTACT.itchio} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: "block", textAlign: "center" }}>
              Play on itch.io ↗
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {FEATURES.map((f) => (
              <div key={f.title} className="card" style={{ padding: "1rem 1.2rem" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <p className="font-display" style={{ fontSize: "13px", fontWeight: 600, color: f.color, marginBottom: "3px" }}>
                      {f.title}
                    </p>
                    <p style={{ fontSize: "12.5px", color: "#8a8a8a", lineHeight: 1.55 }}>{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
