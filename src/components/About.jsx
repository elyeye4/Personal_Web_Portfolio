const PILLARS = [
  {
    title: "Integration Expert",
    color: "#b8a082",
    body: "Specialized in SAP & EDI at DXC Technology, achieving 100% SLA compliance through automation, ITSM, and ITIL-based processes.",
  },
  {
    title: "Agile Leader",
    color: "#8b0000",
    body: "Serving as Scrum Master — bridging technical squads and business stakeholders, improving delivery transparency and team health.",
  },
  {
    title: "Game Developer",
    color: "#cc3333",
    body: "Building a commercial Unity/C# title using design patterns and performance optimization, recognized at VIT Awards 2025.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container">
        <p className="section-label">About me</p>
        <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>
          Where operations meet creativity
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {PILLARS.map((p) => (
            <div key={p.title} className="card">
              <div style={{ fontSize: "1.6rem" }}>{p.icon}</div>
              <h3 className="font-display" style={{ fontSize: "0.95rem", fontWeight: 600, color: p.color, marginBottom: "0.5rem" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#8a8a8a", lineHeight: 1.65 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
