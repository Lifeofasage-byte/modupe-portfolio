import React from "react";

function AboutSection({
  stats,
  isMobile,
  pageStyle,
  eliteCard,
  eliteCardLarge,
  eliteHeadingLeft,
  bodyText,
  miniTitle,
  smallTitle,
  hoverCard,
}) {
  return (
    <div style={pageStyle}>
      {/* HERO */}
      <div
        style={{
          ...eliteCardLarge,
          padding: isMobile ? "34px 22px" : "70px 52px",
          background:
            "linear-gradient(145deg,#080808,#111111,#0c0c0c)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow Orb */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(255,215,0,0.16),transparent 72%)",
          }}
        />

        {/* Glow Line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "2px",
            background:
              "linear-gradient(90deg,transparent,#ffd700,transparent)",
            opacity: 0.45,
          }}
        />

        <p
          style={{
            color: "#ffd700",
            letterSpacing: "4px",
            fontSize: "14px",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "18px",
            fontWeight: "800",
          }}
        >
          Premium Business Intelligence
        </p>

        <h1
          style={{
            ...eliteHeadingLeft,
            textAlign: "center",
            fontSize: isMobile ? "48px" : "86px",
            lineHeight: "0.98",
            marginBottom: "24px",
          }}
        >
          Transforming Data
          <br />
          Into Executive
          <br />
          Decisions
        </h1>

        <p
          style={{
            ...bodyText,
            textAlign: "center",
            maxWidth: "880px",
            margin: "0 auto",
            fontSize: isMobile ? "18px" : "22px",
          }}
        >
          I build elite dashboards, KPI systems, automated
          reporting tools and premium visual intelligence
          systems that help businesses scale faster,
          increase clarity and operate smarter.
        </p>

        {/* STATS */}
        <div
          style={{
            marginTop: "38px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: "18px",
          }}
        >
          {[
            [`${stats.projects}+`, "Projects Built"],
            [`${stats.clients}%`, "Client Satisfaction"],
            [`${stats.support}/7`, "Support Mindset"],
            [`${stats.focus}%`, "Executive Focus"],
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background:
                  "linear-gradient(145deg,#0b0b0b,#101010)",
                border:
                  "1px solid rgba(255,215,0,0.08)",
                borderRadius: "22px",
                padding: "26px",
                textAlign: "center",
              }}
              {...hoverCard}
            >
              <h2
                style={{
                  color: "#ffd700",
                  margin: 0,
                  fontSize: "40px",
                  fontWeight: "900",
                }}
              >
                {item[0]}
              </h2>

              <p
                style={{
                  color: "#d6d6d6",
                  marginTop: "8px",
                  fontSize: "17px",
                }}
              >
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: "22px",
        }}
      >
        {[
          {
            title: "Dashboard Design",
            desc: "Modern dashboards for founders and executives.",
          },
          {
            title: "Reporting Automation",
            desc: "Remove manual reporting and save hours weekly.",
          },
          {
            title: "Executive Insights",
            desc: "Turn metrics into clear business actions.",
          },
        ].map((item, i) => (
          <div key={i} style={eliteCard} {...hoverCard}>
            <h3 style={miniTitle}>{item.title}</h3>
            <p style={bodyText}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* TOOLS */}
      <div style={eliteCard} {...hoverCard}>
        <h2 style={smallTitle}>Tools & Skills</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "14px",
            marginTop: "20px",
          }}
        >
          {[
            "Power BI",
            "Excel",
            "SQL",
            "Power Query",
            "Photoshop",
            "Canva",
            "KPI Reporting",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "16px",
                borderRadius: "18px",
                background: "#0b0b0b",
                border:
                  "1px solid rgba(255,215,0,0.08)",
                color: "#ffd700",
                fontWeight: "700",
              }}
              {...hoverCard}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* WHY HIRE ME */}
      <div style={eliteCard} {...hoverCard}>
        <h2 style={smallTitle}>Why Hire Me</h2>

        <p style={bodyText}>
          I combine analytics + design. Your reports
          won’t only function — they’ll look premium,
          communicate clearly and influence decisions.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;