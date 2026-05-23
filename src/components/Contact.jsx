import { useState, useEffect, useRef } from "react";
import { CONTACT } from "../data";
import ContactModal from "../Utility/ContactUtility";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.15 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="Contact" 
      ref={sectionRef}
      style={{ 
        textAlign: "center", 
        minHeight: "calc(100vh - 80px)", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center",
        boxSizing: "border-box",
        paddingTop: "60px",            
        paddingBottom: "20px",
        gap: "4rem",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 1s ease-out, transform 1s ease-out"
      }}
    >
      <div style={{ maxWidth: "580px", width: "100%", padding: "0 1rem" }}>
        <p className="section-label" style={{ color: "#cc3333", textTransform: "uppercase", letterSpacing: "1px", fontSize: "14px" }}>
          Let's connect
        </p>
        <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: "1rem", color: "#f0ece6" }}>
          Open to opportunities
        </h2>
        <p style={{ color: "#8a8a8a", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
          Whether you have a project, a job opportunity, or just want to have a talk.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <ContactModal email={CONTACT.email} />
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1.5rem", width: "100%", padding: "0 1rem" }}>
        {[
          ["✉", CONTACT.email],
          ["☎", CONTACT.phone],
          ["⦿", CONTACT.location],
        ].map(([icon, text]) => (
          <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", color: "#8a8a8a" }}>
            <span style={{ color: "#cc3333" }}>{icon}</span> 
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}