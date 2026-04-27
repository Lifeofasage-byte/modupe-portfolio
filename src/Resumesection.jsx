import React from "react";

function Resumesection() {
  const isMobile = window.innerWidth < 768;

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
    animation: "fadeUp 0.45s ease",
  };

  const eliteHeading = {
    fontSize: isMobile ? "42px" : "72px",
    fontWeight: "900",
    color: "#ffd700",
    marginBottom: "10px",
    textAlign: "center",
    letterSpacing: "-2px",
  };

  const eliteCard = {
    background: "linear-gradient(145deg,#0c0c0c,#111)",
    border: "1px solid rgba(255,215,0,0.06)",
    borderRadius: "26px",
    padding: isMobile ? "24px" : "36px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
  };

  const smallTitle = {
    color: "#fff",
    fontSize: isMobile ? "24px" : "32px",
    marginBottom: "16px",
    fontWeight: "800",
  };

  const miniTitle = {
    color: "#ffd700",
    fontSize: "22px",
    fontWeight: "800",
    marginBottom: "8px",
  };

  const bodyText = {
    color: "#d8d8d8",
    lineHeight: "1.8",
    fontSize: isMobile ? "16px" : "18px",
  };

  const goldButton = {
    display: "inline-block",
    padding: "16px 28px",
    borderRadius: "14px",
    background: "#ffd700",
    color: "#000",
    fontWeight: "900",
    textDecoration: "none",
    boxShadow: "0 10px 25px rgba(255,215,0,0.22)",
  };

  return (
    <div style={pageStyle}>
      {/* HERO */}
      <div style={eliteCard}>
        <h1 style={eliteHeading}>Resume</h1>

        <p
          style={{
            ...bodyText,
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Data Analyst, BI Consultant and Creative Problem Solver helping
          businesses make smarter decisions with dashboards, reporting systems
          and executive intelligence.
        </p>
      </div>

      {/* EXPERIENCE */}
      <div style={eliteCard}>
        <h2 style={smallTitle}>Experience</h2>

        <div
          style={{
            borderLeft: "3px solid #ffd700",
            paddingLeft: "22px",
            marginBottom: "26px",
          }}
        >
          <h3 style={miniTitle}>Freelance BI Consultant</h3>
          <p style={{ color: "#ffd700", fontWeight: "700" }}>
            2023 — Present
          </p>
          <p style={bodyText}>
            Built premium dashboards, automated reporting systems and KPI tools
            for business growth.
          </p>
        </div>

        <div
          style={{
            borderLeft: "3px solid #ffd700",
            paddingLeft: "22px",
          }}
        >
          <h3 style={miniTitle}>Graphic Designer</h3>
          <p style={{ color: "#ffd700", fontWeight: "700" }}>
            2021 — Present
          </p>
          <p style={bodyText}>
            Designed luxury flyers, brand identities, social creatives and
            marketing visuals.
          </p>
        </div>
      </div>

      {/* EDUCATION */}
      <div style={eliteCard}>
        <h2 style={smallTitle}>Education</h2>

        <p style={bodyText}>
          Federal University of Agriculture Abeokuta
          <br />
          BSc Agriculture (Soil Science & Land Management)
        </p>
      </div>

      {/* SKILLS */}
      <div style={eliteCard}>
        <h2 style={smallTitle}>Core Skills</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: "14px",
            marginTop: "18px",
          }}
        >
          {[
            "Power BI",
            "Excel",
            "SQL",
            "Power Query",
            "Dashboard Design",
            "Data Cleaning",
            "Reporting",
            "Brand Design",
          ].map((skill, i) => (
            <div
              key={i}
              style={{
                padding: "14px",
                borderRadius: "16px",
                background: "#0b0b0b",
                border: "1px solid rgba(255,215,0,0.05)",
                color: "#ffd700",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOAD */}
      <div style={eliteCard}>
        <a
          href="/Modupe_CV.pdf"
          download
          style={goldButton}
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Resumesection;