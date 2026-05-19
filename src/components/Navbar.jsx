import { NAV_LINKS } from "../data";

/** * Scrolls smoothly to the element with the given ID.
 * @param {string} id - The ID of the target element to scroll to.
 */
const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  return (
    <nav className="nav-fixed">
      <div className="nav-logo" onClick={() => scrollTo("home")}>
        <span style={{ color: "#b8a082" }}>Back To Top</span>
      </div>

      <div className="nav-links" style={{ display: "flex", gap: "2rem" }}>
        {NAV_LINKS.map((link) => (
          <span key={link} className="nav-link" onClick={() => scrollTo(link)}>
            {link}
          </span>
        ))}
      </div>
    </nav>
  );
}
