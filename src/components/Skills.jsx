import { SKILLS, CERTIFICATIONS, CERTIFICATES, URLS } from "../data";
import UCR from "../assets/UCR.png";
import SAPLogo from "../assets/SAP Logo 1-1.png";
import ScrumStudy from "../assets/scrumstudy.png";
import MS from "../assets/ms.png";
import Cenfotec from "../assets/cenfotec.png";
import Cisco from "../assets/cisco.png";

const imageMap = {
  "UCR.png": UCR,
  "SAP Logo 1-1.png": SAPLogo,
  "scrumstudy.png": ScrumStudy,
  "ms.png": MS,
  "cenfotec.png": Cenfotec,
  "cisco.png": Cisco,
};

const Skills = () => {
  return (
    <section id="Skills & certs" className="section-pad-alt">
      <div className="container">
        <p className="section-label">Technical profile</p>
        <h3 className="section-title" style={{ marginBottom: "1.3rem" }}>
          Skills
        </h3>

        <div style={{ display: "grid", gap: "1.75rem" }}>
          {SKILLS.map(({ category, items }) => (
            <div key={category}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "10px", color: "#555" }}>
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
          <h3 className="section-title" style={{ marginBottom: "1.5rem" }}>
            Certifications
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px" }}>
            {CERTIFICATIONS.map((cert, i) => {
              const certLink = URLS[cert.urlKey];
              const Wrapper = certLink ? "a" : "div";
              return (
                <Wrapper
                  key={i}
                  className="cert-item"
                  {...(certLink ? { href: certLink, target: "_blank", rel: "noreferrer" } : {})}
                >
                  <div className="cert-icon">
                    <img src={imageMap[cert.image]} alt={cert.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 500, color: "#f0ece6" }}>{cert.name}</p>
                    <p style={{ fontSize: "11px", color: "#8a8a8a", marginTop: "2px" }}>{cert.issuer}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <h1 className="section-title" style={{ marginBottom: "1.5rem", fontSize: "20px" }}>
            Certificates
          </h1>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px" }}>
            {CERTIFICATES.map((cert, i) => {
              const certLink = URLS[cert.urlKey];
              const Wrapper = certLink ? "a" : "div";
              return (
                <Wrapper
                  key={i}
                  className="cert-item"
                  {...(certLink ? { href: certLink, target: "_blank", rel: "noreferrer" } : {})}
                >
                  <div className="cert-icon">
                    <img src={imageMap[cert.image]} alt={cert.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 500, color: "#f0ece6" }}>{cert.name}</p>
                    <p style={{ fontSize: "11px", color: "#8a8a8a", marginTop: "2px" }}>{cert.issuer}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;