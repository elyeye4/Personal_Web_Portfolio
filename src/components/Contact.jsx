import { CONTACT } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ textAlign: "center" }}>
      <div style={{ maxWidth: "580px", margin: "0 auto" }}>
        <p className="section-label">Let's connect</p>
        <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: "1rem" }}>
          Open to opportunities
        </h2>
        <p style={{ color: "#8a8a8a", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
          Whether you have a project, a job opportunity, or just want to talk tech and games — feel free to reach out.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          <a href={`mailto:${CONTACT.email}`} className="btn-primary">
            Send an email
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
            LinkedIn ↗
          </a>
        </div>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          {[
            ["✉", CONTACT.email],
            ["☎", CONTACT.phone],
            ["⦿", CONTACT.location],
          ].map(([icon, text]) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", color: "#555" }}>
              <span style={{ color: "#8a8a8a" }}>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
