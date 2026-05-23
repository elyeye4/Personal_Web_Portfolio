import { URLS } from "../data";
import pigsrevengecover from "../assets/pigsrevengecover.png";
const FEATURES = [
  { title: "Architecture", color: "#b8a082", desc: "Creational & Behavioral design patterns for a scalable, maintainable codebase." },
  { title: "Performance",  color: "#cc3333", desc: "Implemented data structures designed to minimize memory overhead and draw calls, ensuring high performance under resource-constrained environments." },
  { title: "Cross-platform", color: "#8a8a8a", desc: "Designed a robust state machine and decoupled messaging system to handle real-time data persistence and application flow without memory leaks." },
  { title: "Agile", color: "#8b0000", desc: "Acted as Scrum Master to manage the full lifecycle, refining user stories, executing retrospectives, and tracking delivery metrics." },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container">
        <p className="section-label">Featured project</p>
        <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
          PIG's Revenge
        </h2>
        <h1 className="section-title" style={{ marginBottom: "2.5rem",fontSize: "15.5px" }}>
          Scalable Architecture videogame & Agile Case Study
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(350px, 100%), 1fr ))", gap: "1.75rem" }}>
          <div className="card" style={{ borderColor: "rgba(204, 51, 51, 0.3)" }}>
              <div
                style={{
                  background: "rgba(204,51,51,0.06)",
                  borderRadius: 10,
                  height: 170,
                  marginBottom: "1.25rem",
                  border: "1px solid rgba(204,51,51,0.1)",
                  overflow: "hidden"
                }}
              >
             <img
                src={pigsrevengecover}
                alt="PIG's Revenge Cover"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1rem" }}>
              {["Unity", "C#", "Design Patterns", "Software Architecture", "Agile / Scrum", "Optimization"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <p style={{ fontSize: "13.5px", color: "#8a8a8a", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              A commercial cross-platform software project built to demonstrate advanced software engineering principles. Designed with an entirely decoupled architecture and managed through a rigorous Agile development lifecycle — maintaining a consistent product backlog and sprint cadence.
            </p>

            <a href={URLS.gameproject} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: "block", textAlign: "center" }}>
              Launch Application Demo ↗
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {FEATURES.map((f) => (
              <div key={f.title} className="card" style={{ padding: "1rem 1.2rem" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <p className="font-display" style={{ fontSize: "13px", fontWeight: 600, color: f.color, marginBottom: "17px" }}>
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
