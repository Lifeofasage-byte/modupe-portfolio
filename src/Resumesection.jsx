import React from "react";

function ResumeSection() {
  const screenWidth = window.innerWidth;

  const isMobile = screenWidth < 768;
  const isTablet =
    screenWidth >= 768 && screenWidth < 1100;

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    gap: isMobile ? "20px" : "28px",
    animation: "fadeUp 0.45s ease",
  };

  const eliteCard = {
    background:
      "linear-gradient(145deg,#0b0b0b,#111111,#0d0d0d)",
    border: "1px solid rgba(255,215,0,0.06)",
    borderRadius: isMobile ? "24px" : "30px",
    padding: isMobile
      ? "24px 18px"
      : isTablet
      ? "34px 28px"
      : "46px 42px",
    boxShadow:
      "0 18px 45px rgba(0,0,0,0.35)",
    position: "relative",
    overflow: "hidden",
  };

  const heroHeading = {
    fontSize: isMobile
      ? "44px"
      : isTablet
      ? "62px"
      : "92px",
    color: "#ffd700",
    fontWeight: "900",
    margin: 0,
    lineHeight: "1",
    textAlign: "center",
    letterSpacing: "-2px",
  };

  const sectionTitle = {
    color: "#fff",
    fontSize: isMobile ? "28px" : "42px",
    fontWeight: "900",
    margin: 0,
    marginBottom: "24px",
    textAlign: "center",
  };

  const miniTitle = {
    color: "#ffd700",
    fontSize: isMobile ? "22px" : "30px",
    fontWeight: "800",
    marginBottom: "10px",
  };

  const bodyText = {
    color: "#d7d7d7",
    fontSize: isMobile ? "16px" : "18px",
    lineHeight: "1.8",
    margin: 0,
  };

  const goldButton = {
    display: "inline-block",
    padding: isMobile
      ? "16px 28px"
      : "18px 36px",
    borderRadius: "16px",
    background: "#ffd700",
    color: "#000",
    fontWeight: "900",
    textDecoration: "none",
    fontSize: isMobile ? "16px" : "20px",
    boxShadow:
      "0 14px 28px rgba(255,215,0,0.25)",
  };

  return (
    <div style={pageStyle}>
      {/* HERO */}
      <div style={eliteCard}>
        {/* glow */}
        <div
          style={{
            position: "absolute",
            top: "-90px",
            right: "-90px",
            width: "230px",
            height: "230px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(255,215,0,0.14),transparent 72%)",
          }}
        />

        <h1 style={heroHeading}>
          Resume
        </h1>

        <p
          style={{
            ...bodyText,
            textAlign: "center",
            maxWidth: "860px",
            margin:
              "18px auto 0 auto",
            fontSize: isMobile
              ? "17px"
              : "20px",
          }}
        >
          Data Analyst, BI Consultant and
          Creative Problem Solver helping
          businesses make smarter decisions
          with dashboards, reporting systems
          and executive intelligence.
        </p>
      </div>

      {/* PROFESSIONAL SUMMARY */}
      <div style={eliteCard}>
        <h2 style={sectionTitle}>
          Professional Summary
        </h2>

        <p style={bodyText}>
          Results-driven analyst skilled in
          transforming raw data into clear
          executive decisions. Strong
          background in Power BI, Excel,
          reporting automation, KPI systems
          and dashboard storytelling.
        </p>
      </div>

      {/* EXPERIENCE */}
      <div style={eliteCard}>
        <h2 style={sectionTitle}>
          Experience
        </h2>

        <div
          style={{
            borderLeft:
              "3px solid #ffd700",
            paddingLeft: "22px",
            marginBottom: "28px",
          }}
        >
          <h3 style={miniTitle}>
            Freelance BI Consultant
          </h3>

          <p
            style={{
              color: "#ffd700",
              fontWeight: "800",
              marginBottom: "12px",
            }}
          >
            2023 — Present
          </p>

          <p style={bodyText}>
            Built premium dashboards,
            automated reporting systems,
            KPI tools and executive
            reporting solutions for
            growing businesses.
          </p>
        </div>

        <div
          style={{
            borderLeft:
              "3px solid #ffd700",
            paddingLeft: "22px",
          }}
        >
          <h3 style={miniTitle}>
            Graphic Designer
          </h3>

          <p
            style={{
              color: "#ffd700",
              fontWeight: "800",
              marginBottom: "12px",
            }}
          >
            2021 — Present
          </p>

          <p style={bodyText}>
            Created luxury branding,
            flyers, ad creatives and
            premium visuals for brands
            and entrepreneurs.
          </p>
        </div>
      </div>

      {/* EDUCATION */}
      <div style={eliteCard}>
        <h2 style={sectionTitle}>
          Education
        </h2>

        <p style={bodyText}>
          Federal University of
          Agriculture Abeokuta
          <br />
          BSc Agriculture (Soil Science
          & Land Management)
        </p>
      </div>

      {/* DOWNLOAD */}
      <div
        style={{
          ...eliteCard,
          textAlign: "center",
        }}
      >
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

export default ResumeSection;