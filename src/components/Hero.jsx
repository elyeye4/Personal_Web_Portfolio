import { useState, useEffect } from "react";
import { ROLES } from "../data";

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let timeout;

    if (!deleting) {
      if (typed.length < role.length) {
        timeout = setTimeout(() => setTyped(role.slice(0, typed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (typed.length > 0) {
        timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 38);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIdx]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    
    <section
      id="home"
      className="hero-bg"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "60px" }}
    >
      <div className="container" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", padding: "3rem" }}>

        <h1 className="hero-name fade-up delay-1">
          Juan José<br />
          <span style={{ color: "#cc3333" }}>Castro</span>{" "}
          <span style={{ color: "#f0ece6" }}>Zúñiga</span>
        </h1>

        <div style={{ height: "2.8rem", display: "flex", alignItems: "center", margin: "1.2rem 0 2rem" }}>
          <span className="font-display" style={{ fontSize: "clamp(1rem, 2.2vw, 1.35rem)", color: "#8a8a8a", fontWeight: 300 }}>
            {typed}
            <span className="cursor">|</span>
          </span>
        </div>

        <p className="fade-up delay-2" style={{ fontSize: "1.05rem", color: "#8a8a8a", maxWidth: "520px", lineHeight: 1.75, marginBottom: "2.5rem" }}>
          Specialist in the integration and automation of enterprise data flows (EDI) in SAP environments. I combine software engineering with diverse
           technology stacks to optimize systems, along with agile leadership as a Scrum Master to ensure efficient, 
           business-aligned delivery.
        </p>

        <div className="fade-up delay-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <span className="btn-primary" onClick={() => scrollTo("Contact")}>Get in touch</span>
          <span className="btn-ghost" onClick={() => scrollTo("Career")}>See my work →</span>
        </div>
        <div className="fade-up delay-4" style={{ display: "flex", gap: "3rem", marginTop: "5rem", flexWrap: "wrap" }}>
          {[
            ["3+", "Years experience on EDI Integration"],
            ["100%", "SLA compliance"],
            ["20+", "EDI Integrations projects Delivered"],
            ["+25%", "Operational process automation"],
          ].map(([val, label]) => (
            <div key={label}>
              <div className="stat-num">{val}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
