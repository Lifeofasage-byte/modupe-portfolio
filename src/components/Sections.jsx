import React, { useEffect, useState } from "react";
import { blogPosts } from "../data";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Sections({ activeSection }) {
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
  const [portfolioTab, setPortfolioTab] = React.useState("All");
  const isMobile = window.innerWidth < 768;

  const pageStyle = {
    animation: "fadePage 0.45s ease",
    display: "flex",
    flexDirection: "column",
    gap: "26px",
  };

  const eliteHeading = {
    fontSize: isMobile ? "42px" : "72px",
    fontWeight: "900",
    lineHeight: "1.05",
    margin: "0 0 18px 0",
    color: "#ffd700",
    letterSpacing: "-2px",
    textAlign: "center",
    textShadow: "0 0 24px rgba(255,215,0,0.22)",
  };

  const eliteHeadingLeft = {
    ...eliteHeading,
    textAlign: "left",
  };

  const eliteCard = {
    background: "linear-gradient(145deg,#0d0d0d,#111111)",
    border: "1px solid rgba(255,215,0,0.06)",
    borderRadius: "28px",
    padding: "34px",
    boxShadow:
      "0 12px 40px rgba(0,0,0,0.45), 0 0 18px rgba(255,215,0,0.04)",
    transition: "all 0.35s ease",
  };

  const eliteCardLarge = {
    ...eliteCard,
    padding: "50px",
  };

  const bodyText = {
    color: "#d8d8d8",
    fontSize: "19px",
    lineHeight: "1.85",
  };

  const miniTitle = {
    color: "#ffd700",
    fontSize: "22px",
    fontWeight: "800",
    marginBottom: "10px",
  };

  const smallTitle = {
    color: "#fff",
    fontSize: "30px",
    fontWeight: "800",
    marginBottom: "18px",
  };

  const hoverCard = {
    onMouseEnter: (e) => {
      e.currentTarget.style.transform = "translateY(-8px)";
      e.currentTarget.style.boxShadow =
        "0 18px 45px rgba(255,215,0,0.14)";
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.transform = "translateY(0px)";
      e.currentTarget.style.boxShadow =
        "0 12px 40px rgba(0,0,0,0.45), 0 0 18px rgba(255,215,0,0.04)";
    },
  };

  const goldButton = {
    display: "inline-block",
    marginTop: "18px",
    padding: "16px 34px",
    borderRadius: "16px",
    background: "#ffd700",
    color: "#000",
    fontWeight: "900",
    fontSize: "16px",
    textDecoration: "none",
    boxShadow: "0 0 25px rgba(255,215,0,0.35)",
    transition: "all 0.3s ease",
  };

  const buttonHover = {
    onMouseEnter: (e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow =
        "0 0 35px rgba(255,215,0,0.55)";
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.transform = "translateY(0px)";
      e.currentTarget.style.boxShadow =
        "0 0 25px rgba(255,215,0,0.35)";
    },
  };

  /* ABOUT */
if (activeSection === "about") {
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
          I build elite dashboards, KPI systems, automated reporting
          tools and premium visual intelligence systems that help
          businesses scale faster, increase clarity and operate smarter.
        </p>

        {/* LIVE STATS */}
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
          <div
            key={i}
            style={eliteCard}
            {...hoverCard}
          >
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

  /* RESUME */
  if (activeSection === "resume") {
    return (
      <div style={pageStyle}>
        <h1 style={eliteHeading}>Resume</h1>

        <div style={eliteCard} {...hoverCard}>
          <h2 style={smallTitle}>Professional Summary</h2>
          <p style={bodyText}>
            Data Analyst, BI Consultant and Graphic Designer with
            experience creating dashboards, reporting systems,
            executive KPI tools and luxury visual assets.
          </p>
        </div>

        <div style={eliteCard} {...hoverCard}>
          <h2 style={smallTitle}>Experience</h2>

          <div
            style={{
              borderLeft: "3px solid #ffd700",
              paddingLeft: "22px",
              marginBottom: "24px",
            }}
          >
            <h3 style={miniTitle}>Freelance BI Consultant</h3>
            <p style={{ color: "#ffd700", fontWeight: "800" }}>
              2023 - Present
            </p>
            <p style={bodyText}>
              Built dashboards, automated reporting and KPI systems.
            </p>
          </div>

          <div
            style={{
              borderLeft: "3px solid #ffd700",
              paddingLeft: "22px",
            }}
          >
            <h3 style={miniTitle}>Graphic Designer</h3>
            <p style={{ color: "#ffd700", fontWeight: "800" }}>
              2021 - Present
            </p>
            <p style={bodyText}>
              Designed flyers, ads, brand identities and campaigns.
            </p>
          </div>
        </div>

        <div style={eliteCard} {...hoverCard}>
          <h2 style={smallTitle}>Education</h2>
          <p style={bodyText}>
            Federal University of Agriculture Abeokuta
            <br />
            BSc Agriculture (Soil Science & Land Management)
          </p>
        </div>

        <div style={eliteCard} {...hoverCard}>
          <a
            href="/Modupe_CV.pdf"
            download
            style={goldButton}
            {...buttonHover}
          >
            Download CV
          </a>
        </div>
      </div>
    );
  }

  /* PREMIUM PORTFOLIO SECTION (Desktop + Tablet + Mobile Responsive) */
if (activeSection === "portfolio") {
  const portfolioItems = [
    /* DASHBOARDS */
    {
      title: "Sales Dashboard",
      category: "Dashboards",
      image: "/dashboards/sales.png",
      desc: "Revenue trends, conversion metrics and executive KPIs.",
      link: "/dashboards/sales.png",
    },
    {
      title: "Finance Dashboard",
      category: "Dashboards",
      image: "/dashboards/finance.png",
      desc: "Profitability, budgets and forecasting intelligence.",
      link: "/dashboards/finance.png",
    },
    {
      title: "HR Dashboard",
      category: "Dashboards",
      image: "/dashboards/hr.png",
      desc: "Retention, workforce and hiring analytics.",
      link: "/dashboards/hr.png",
    },

    /* GRAPHICS */
    {
      title: "Corporate Flyer",
      category: "Graphic Design",
      image: "/graphics/corporate-flyer.png",
      desc: "Premium marketing visuals for campaigns.",
      link: "/graphics/corporate-flyer.png",
    },
    {
      title: "Luxury Ads",
      category: "Graphic Design",
      image: "/graphics/luxury-social-ads.png",
      desc: "High-converting paid ad creatives.",
      link: "/graphics/luxury-social-ads.png",
    },

    /* BRANDING */
    {
      title: "SAGE Analytics",
      category: "Branding",
      image: "/branding/sage-branding.png",
      desc: "Luxury identity system for analytics brand.",
      link: "/branding/sage-branding.png",
    },
    {
      title: "Luxora Collection",
      category: "Branding",
      image: "/branding/luxury-logo-system.png",
      desc: "Elegant fashion logo system.",
      link: "/branding/luxury-logo-system.png",
    },
  ];

  const filtered =
    portfolioTab === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === portfolioTab
        );

  const isMobile = window.innerWidth < 768;
  const isTablet =
    window.innerWidth >= 768 &&
    window.innerWidth < 1024;

  return (
    <div
      style={{
        padding: isMobile
          ? "30px 16px"
          : isTablet
          ? "40px 28px"
          : "60px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      {/* HERO */}
      <div
        style={{
          background:
            "linear-gradient(145deg,#0b0b0b,#111)",
          border:
            "1px solid rgba(255,255,255,0.05)",
          borderRadius: "28px",
          padding: isMobile
            ? "32px 20px"
            : "55px 40px",
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
          SELECTED WORK
        </p>

        <h1
          style={{
            color: "#fff",
            fontSize: isMobile
              ? "38px"
              : isTablet
              ? "56px"
              : "76px",
            lineHeight: "1",
            fontWeight: "900",
            marginBottom: "18px",
          }}
        >
          Premium Portfolio
        </h1>

        <p
          style={{
            color: "#9e9e9e",
            maxWidth: "780px",
            margin: "0 auto",
            fontSize: isMobile
              ? "16px"
              : "20px",
            lineHeight: "1.7",
          }}
        >
          Dashboards, branding systems and
          strategic visuals designed to help
          businesses scale with clarity.
        </p>
      </div>

      {/* FILTERS */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        {[
          "All",
          "Dashboards",
          "Graphic Design",
          "Branding",
        ].map((tab) => (
          <button
            key={tab}
            onClick={() => setPortfolioTab(tab)}
            style={{
              padding: isMobile
                ? "12px 18px"
                : "14px 24px",
              borderRadius: "50px",
              border:
                portfolioTab === tab
                  ? "1px solid #D4AF37"
                  : "1px solid rgba(255,255,255,0.08)",
              background:
                portfolioTab === tab
                  ? "#151515"
                  : "#0c0c0c",
              color:
                portfolioTab === tab
                  ? "#D4AF37"
                  : "#fff",
              fontWeight: "700",
              cursor: "pointer",
              transition: "0.3s ease",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
            ? "repeat(2,1fr)"
            : "repeat(3,1fr)",
          gap: "24px",
        }}
      >
        {filtered.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background:
                  "linear-gradient(145deg,#0d0d0d,#141414)",
                border:
                  "1px solid rgba(255,255,255,0.05)",
                borderRadius: "24px",
                overflow: "hidden",
                transition: "0.35s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
                e.currentTarget.style.boxShadow =
                  "none";
              }}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: isMobile
                    ? "220px"
                    : "260px",
                  objectFit: "cover",
                }}
              />

              {/* CONTENT */}
              <div
                style={{
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    color: "#D4AF37",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    marginBottom: "10px",
                    fontWeight: "700",
                  }}
                >
                  {item.category}
                </p>

                <h3
                  style={{
                    color: "#fff",
                    fontSize: "26px",
                    marginBottom: "10px",
                    fontWeight: "800",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#9e9e9e",
                    lineHeight: "1.7",
                    fontSize: "15px",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

  /* BLOG */
  if (activeSection === "blog") {
    return (
      <div style={pageStyle}>
        <h1 style={eliteHeading}>Insights</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "24px",
          }}
        >
          {blogPosts.map((item, index) => (
            <div
              key={index}
              style={{
                ...eliteCard,
                padding: 0,
                overflow: "hidden",
              }}
              {...hoverCard}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "22px" }}>
                <h3 style={{ color: "#fff" }}>{item.title}</h3>
                <p style={bodyText}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* CONTACT */
  return (
  <div style={pageStyle}>
    <h1 style={eliteHeading}>Contact</h1>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(260px,1fr))",
        gap: "24px",
      }}
    >
      <a
        href="mailto:hiremodupe@gmail.com"
        style={{ textDecoration: "none" }}
      >
        <div style={eliteCard} {...hoverCard}>
          <MdEmail size={54} color="#ffd700" />
          <h3 style={{ color: "#fff" }}>Email</h3>
        </div>
      </a>

      <a
        href="https://wa.me/2349079468332"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div style={eliteCard} {...hoverCard}>
          <FaWhatsapp size={54} color="#25D366" />
          <h3 style={{ color: "#fff" }}>WhatsApp</h3>
        </div>
      </a>
    </div>

    {/* FORM */}
    <form
      style={eliteCard}
      action="https://formspree.io/f/your_form_id"
      method="POST"
    >
      <h2 style={smallTitle}>Send Inquiry</h2>

      <input
        type="text"
        placeholder="Full Name"
        style={{
          width: "100%",
          padding: "16px",
          marginBottom: "14px",
          borderRadius: "14px",
          border: "none",
        }}
      />

      <input
        type="email"
        placeholder="Email Address"
        style={{
          width: "100%",
          padding: "16px",
          marginBottom: "14px",
          borderRadius: "14px",
          border: "none",
        }}
      />

      <textarea
        rows="6"
        placeholder="Tell me about your project..."
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: "14px",
          border: "none",
        }}
      />

      <button
        type="submit"
        style={{
          ...goldButton,
          border: "none",
          cursor: "pointer",
          marginTop: "18px",
        }}
        {...buttonHover}
      >
        Send Inquiry
      </button>
    </form>
  </div>
);
}

export default Sections;