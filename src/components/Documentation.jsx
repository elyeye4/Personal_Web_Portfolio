export default function Documentation() {
    return (
        <section id="Documentation" className="section-pad-alt" style={{ textAlign: "center" }}>
            <div style={{ maxWidth: "580px", margin: "0 auto" }}>
                <p className="section-label">How I made this portfolio</p>
                <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: "1rem" }}>
                    Documentation
                </h2>
                <p style={{ color: "#8a8a8a", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                    Click the button to view the documentation of how I made this portfolio, including the technologies used and the development process.
                </p>
            </div>
            <a 
            href="/Personal_Web_Portfolio_Documentation.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            >
            View documentation
            </a>
        </section>
    );
}