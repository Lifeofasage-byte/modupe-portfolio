import React, { useState, useEffect } from "react";

function AboutSection({
  isMobile = window.innerWidth < 768,
  pageStyle = {},
  eliteCard = {},
  eliteCardLarge = {},
  eliteHeadingLeft = {},
  bodyText = {},
  miniTitle = {},
  smallTitle = {},
  hoverCard = {},
}) {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    support: 0,
    focus: 0,
  });

  useEffect(() => {
    let count = 0;

    const timer = setInterval(() => {
      count++;

      setStats({
        projects: count > 20 ? 20 : count,
        clients: count > 95 ? 95 : count,
        support: count > 24 ? 24 : count,
        focus: count > 100 ? 100 : count,
      });

      if (count >= 100) clearInterval(timer);
    }, 25);

    return () => clearInterval(timer);
  }, []);

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
            filter: "blur(4px)",
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
            color: "#ffffff",
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
            lineHeight: "1.8",
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
                transform: `translateY(${i * 2}px)`,
              }}
              {...hoverCard}
            >
              <h2
                style={{
                  color: "#ffd700",
                  margin: 0,
                  fontSize: "40px",
                  fontWeight: "900",
                  textShadow:
                    "0 0 18px rgba(255,215,0,0.25)",
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
            desc:
              "Modern dashboards for founders, teams and executives.",
          },
          {
            title: "Reporting Automation",
            desc:
              "Remove manual reporting and save hours weekly.",
          },
          {
            title: "Executive Insights",
            desc:
              "Turn metrics into clear business actions.",
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
            ["📊", "Power BI"],
            ["📗", "Excel"],
            ["🗄️", "SQL"],
            ["⚡", "Power Query"],
            ["🎨", "Canva"],
            ["🖼️", "Photoshop"],
            ["🧹", "Data Cleaning"],
            ["📈", "KPI Reporting"],
            ["📑", "Dashboard Storytelling"],
          ].map((skill, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 18px",
                borderRadius: "18px",
                background: "#0b0b0b",
                border:
                  "1px solid rgba(255,215,0,0.08)",
              }}
              {...hoverCard}
            >
              <span style={{ fontSize: "22px" }}>
                {skill[0]}
              </span>

              <span
                style={{
                  color: "#ffd700",
                  fontWeight: "700",
                }}
              >
                {skill[1]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* WHY HIRE ME */}
      <div style={eliteCard} {...hoverCard}>
        <h2 style={smallTitle}>Why Hire Me</h2>

        <p style={bodyText}>
          I combine analytics + design. Your reports do not only
          function — they look premium, communicate clearly,
          influence decision-makers and create trust instantly.
        </p>

        <div
          style={{
            marginTop: "24px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "18px",
          }}
        >
          {[
            "Luxury Presentation Style",
            "Clean Business Thinking",
            "Fast Delivery",
            "Data Accuracy Focus",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#0b0b0b",
                padding: "18px",
                borderRadius: "18px",
                color: "#fff",
                border:
                  "1px solid rgba(255,215,0,0.06)",
              }}
              {...hoverCard}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;