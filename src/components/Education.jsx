import { EDUCATION } from "../data";

export default function Education() {
  return (
    <section id="education" className="section-pad-alt">
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-title" style={{ marginBottom: "3rem" }}>
          Academic Background
        </h2>

        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          {/* Línea vertical */}
          <div
            style={{
              position: "absolute",
              left: "5px",
              top: "12px",
              bottom: 0,
              width: "1px",
              background:
                "linear-gradient(to bottom, #cc3333 0%, #8b0000 50%, #252525 100%)",
            }}
          />

          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "1.5rem",
                marginBottom: "2rem",
                position: "relative",
              }}
            >
              {/* Punto de la timeline */}
              <div
                className="timeline-dot"
                style={{
                  background: edu.color,
                  boxShadow: `0 0 0 5px ${edu.color}18`,
                }}
              />

              <div className="card" style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "#f0ece6",
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: edu.color,
                        fontWeight: 500,
                        marginTop: "3px",
                      }}
                    >
                      {edu.institution}
                    </p>
                  </div>

                  <span
                    style={{
                      fontSize: "11px",
                      color: "#8a8a8a",
                      background: "#0a0a0a",
                      border: "1px solid #252525",
                      borderRadius: "6px",
                      padding: "4px 10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {edu.period}
                  </span>
                </div>

                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  {edu.details.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: "8px",
                        fontSize: "13px",
                        color: "#8a8a8a",
                        lineHeight: 1.6,
                        marginBottom: "4px",
                      }}
                    >
                      <span
                        style={{
                          color: edu.color,
                          flexShrink: 0,
                          marginTop: "1px",
                        }}
                      >
                        ›
                      </span>
                      {item}
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