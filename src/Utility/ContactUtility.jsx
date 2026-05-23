import { useState } from "react";

export default function ContactModal({ email }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/mqejbraj", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      <button className="btn-primary" onClick={() => setIsOpen(true)}>
        Send an email
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed", inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <div style={{
            background: "white", borderRadius: "1rem",
            padding: "2rem", width: "100%", maxWidth: "480px",
            display: "flex", flexDirection: "column", gap: "1rem",
          }}>
            <h2 style={{ margin: 0, color: "#000000" }}>Send a message</h2>
            <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>
              I'll get back to you from <strong>{email}</strong>
            </p>

            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "2rem", color: "#000000" }}>
                <p style={{ margin: 0, marginBottom: "2rem" }}>Message sent! I'll reply soon.</p>
                <button className="btn-primary" onClick={() => { setIsOpen(false); setStatus("idle"); }}>
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  style={inputStyle}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  style={inputStyle}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  style={{ ...inputStyle, resize: "vertical" }}
                />

                {status === "error" && (
                  <p style={{ color: "red", margin: 0 }}>Something went wrong. Try again.</p>
                )}

                <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
                  <button
                    type="button"
                    className="btn-ghost"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send →"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

const inputStyle = {
  padding: "0.65rem 0.9rem",
  borderRadius: "0.5rem",
  border: "1px solid #ddd",
  fontSize: "1rem",
  width: "100%",
  boxSizing: "border-box",
};