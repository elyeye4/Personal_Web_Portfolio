import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (link) => {
    scrollTo(link);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="nav-fixed">
        <div
          className="nav-logo"
          style={{
            opacity: showBackToTop ? 1 : 0,
            pointerEvents: showBackToTop ? "auto" : "none",
          }}
          onClick={() => {
            scrollTo("home");
            setMenuOpen(false);
          }}
        >
          <span style={{ color: "#b8a082" }}>Back To Top</span>
        </div>

        <div className="nav-links nav-links-desktop"style={{ display: "flex", gap: "2rem" }}>
          {NAV_LINKS.map((link) => (
            <span key={link} className="nav-link" onClick={() => scrollTo(link)}>
              {link}
            </span>
          ))}
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-bar ${menuOpen ? "open-1" : ""}`} />
          <span className={`hamburger-bar ${menuOpen ? "open-2" : ""}`} />
          <span className={`hamburger-bar ${menuOpen ? "open-3" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="nav-mobile-overlay" onClick={() => setMenuOpen(false)}>
          <div className="nav-mobile-menu" onClick={(e) => e.stopPropagation()}>
            {NAV_LINKS.map((link) => (
              <span key={link} className="nav-mobile-link" onClick={() => handleNavClick(link)}>
                {link}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}