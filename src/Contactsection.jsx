import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contactsection() {
  const isMobile = window.innerWidth < 768;

  const cardStyle = {
    background: "linear-gradient(145deg,#0d0d0d,#141414)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: "24px",
    padding: isMobile ? "24px" : "34px",
  };

  const inputStyle = {
    width: "100%",
    padding: "16px",
    marginBottom: "14px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.06)",
    background: "#0b0b0b",
    color: "#fff",
    outline: "none",
    fontSize: "15px",
  };

  const buttonStyle = {
    padding: "16px 28px",
    borderRadius: "14px",
    background: "#ffd700",
    color: "#000",
    border: "none",
    fontWeight: "900",
    cursor: "pointer",
    marginTop: "10px",
    boxShadow: "0 10px 25px rgba(255,215,0,0.22)",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "28px",
      }}
    >
      {/* HERO */}
      <div
        style={{
          background: "linear-gradient(145deg,#0b0b0b,#111)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "28px",
          padding: isMobile ? "30px 20px" : "55px 40px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#D4AF37",
            fontSize: "13px",
            letterSpacing: "3px",
            fontWeight: "700",
            marginBottom: "14px",
          }}
        >
          LET'S BUILD
        </p>

        <h1
          style={{
            color: "#fff",
            fontSize: isMobile ? "40px" : "72px",
            fontWeight: "900",
            lineHeight: "1",
            marginBottom: "16px",
          }}
        >
          Contact
        </h1>

        <p
          style={{
            color: "#9e9e9e",
            fontSize: isMobile ? "16px" : "20px",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          Need dashboards, reporting systems, branding or premium
          business visuals? Reach out directly.
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(2,1fr)",
          gap: "24px",
        }}
      >
        <a
          href="mailto:hiremodupe@gmail.com"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div style={cardStyle}>
            <MdEmail size={54} color="#ffd700" />
            <h3
              style={{
                color: "#fff",
                marginTop: "16px",
                fontSize: "24px",
              }}
            >
              Email
            </h3>
            <p style={{ color: "#9e9e9e" }}>
              hiremodupe@gmail.com
            </p>
          </div>
        </a>

        <a
          href="https://wa.me/2349079468332"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div style={cardStyle}>
            <FaWhatsapp size={54} color="#25D366" />
            <h3
              style={{
                color: "#fff",
                marginTop: "16px",
                fontSize: "24px",
              }}
            >
              WhatsApp
            </h3>
            <p style={{ color: "#9e9e9e" }}>
              Instant direct chat
            </p>
          </div>
        </a>
      </div>

      {/* FORM */}
      <form
        style={cardStyle}
        action="https://formspree.io/f/your_form_id"
        method="POST"
      >
        <h2
          style={{
            color: "#fff",
            fontSize: "32px",
            marginBottom: "18px",
          }}
        >
          Send Inquiry
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email Address"
          style={inputStyle}
        />

        <textarea
          rows="6"
          placeholder="Tell me about your project..."
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Send Inquiry
        </button>
      </form>
    </div>
  );
}

export default Contactsection;