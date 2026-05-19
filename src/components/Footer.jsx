import { CONTACT } from "../data";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #141414", padding: "1.75rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
      <span className="font-display" style={{ fontSize: "13px" }}>
        <span style={{ color: "#b8a082" }}>JJCZ</span>
        <span style={{ color: "#cc3333" }}>.</span>
        <span style={{ color: "#252525" }}>dev</span>
      </span>

      <span style={{ fontSize: "12px", color: "#252525" }}>
        Juan José Castro Zúñiga · 2026
      </span>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a href={`mailto:${CONTACT.email}`} style={{ fontSize: "12px", color: "#555", textDecoration: "none" }}>Email</a>
        <a href={CONTACT.itchio} target="_blank" rel="noreferrer" style={{ fontSize: "12px", color: "#555", textDecoration: "none" }}>itch.io</a>
      </div>
    </footer>
  );
}
