import { CAREER } from "../data";

export default function Career() {
  return (
    <section id="career" className="section-pad-alt">
      <div className="container">
        <p className="section-label">Career path</p>
        <h2 className="section-title" style={{ marginBottom: "3rem" }}>
          Professional Experience
        </h2>

        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          <div
            style={{
              position: "absolute",
              left: "5px",
              top: "12px",
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, #cc3333 0%, #252525 70%)",
            }}
          />

          {CAREER.map((exp, i) => (
            <div key={i} style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem", position: "relative" }}>
              <div
                className="timeline-dot"
                style={{ background: exp.color[1], boxShadow: `0 0 0 5px ${exp.color[1]}18` }}
              />

              <div className="card" style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "0.75rem" }}>
                  <div>
                    <h3 className="font-display" style={{ fontSize: "0.95rem", fontWeight: 600, color: "#f0ece6" }}>
                      {exp.role}
                    </h3>
                    <p style={{ fontSize: "13px", color: exp.color[0], fontWeight: 500, marginTop: "3px" }}>
                      {exp.company}
                    </p>
                  </div>
                  <span style={{ fontSize: "11px", color: "#8a8a8a", background: "#0a0a0a", border: "1px solid #252525", borderRadius: "6px", padding: "4px 10px", whiteSpace: "nowrap" }}>
                    {exp.period}
                  </span>
                </div>

                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{ display: "flex", gap: "8px", fontSize: "13px", color: "#8a8a8a", lineHeight: 1.6, marginBottom: "4px" }}>
                      <span style={{ color: exp.color, flexShrink: 0, marginTop: "1px" }}>›</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
