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

  /* PORTFOLIO */
if (activeSection === "portfolio") {
  const portfolioItems = [
    /* DASHBOARDS */
    {
      title: "Sales Dashboard",
      category: "Dashboards",
      image: "/dashboards/sales.png",
      desc: "Revenue trends and KPIs.",
      link: "/dashboards/sales.png",
    },
    {
      title: "Finance Dashboard",
      category: "Dashboards",
      image: "/dashboards/finance.png",
      desc: "Profitability and budgets.",
      link: "/dashboards/finance.png",
    },
    {
      title: "HR Dashboard",
      category: "Dashboards",
      image: "/dashboards/hr.png",
      desc: "Retention and hiring metrics.",
      link: "/dashboards/hr.png",
    },
    {
      title: "Marketing Dashboard",
      category: "Dashboards",
      image: "/dashboards/marketing.png",
      desc: "ROI and campaign analytics.",
      link: "/dashboards/marketing.png",
    },

    /* GRAPHIC DESIGN */
    {
      title: "Business Flyer",
      category: "Graphic Design",
      image: "/graphics/business-flyer.png",
      desc: "Luxury business flyer design.",
      link: "/graphics/business-flyer.png",
    },
    {
      title: "Corporate Flyer",
      category: "Graphic Design",
      image: "/graphics/corporate-flyer.png",
      desc: "Corporate campaign visuals.",
      link: "/graphics/corporate-flyer.png",
    },
    {
      title: "Crypto Promo",
      category: "Graphic Design",
      image: "/graphics/crypto-promo-flyer.png",
      desc: "Fintech luxury advert.",
      link: "/graphics/crypto-promo-flyer.png",
    },
    {
      title: "Fashion Banner",
      category: "Graphic Design",
      image: "/graphics/fashion-banner.png",
      desc: "Premium fashion promo.",
      link: "/graphics/fashion-banner.png",
    },
    {
      title: "Luxury Ads",
      category: "Graphic Design",
      image: "/graphics/luxury-social-ads.png",
      desc: "Social ad creatives.",
      link: "/graphics/luxury-social-ads.png",
    },
    {
      title: "Real Estate Poster",
      category: "Graphic Design",
      image: "/graphics/real-estate-poster.png",
      desc: "Property campaign visual.",
      link: "/graphics/real-estate-poster.png",
    },
    {
      title: "Restaurant Flyer",
      category: "Graphic Design",
      image: "/graphics/restaurant-flyer.png",
      desc: "Food brand flyer.",
      link: "/graphics/restaurant-flyer.png",
    },

    /* BRANDING */
    {
      title: "SAGE Analytics",
      category: "Branding",
      image: "/branding/sage-branding.png",
      desc: "Luxury analytics identity.",
      link: "/branding/sage-branding.png",
    },
    {
      title: "Luxora Collection",
      category: "Branding",
      image: "/branding/luxury-logo-system.png",
      desc: "Fashion logo identity.",
      link: "/branding/luxury-logo-system.png",
    },
    {
      title: "Wennys Kitchen",
      category: "Branding",
      image: "/branding/restaurant-brand-identity.png",
      desc: "Restaurant logo identity.",
      link: "/branding/restaurant-brand-identity.png",
    },
  ];

  const filtered =
    portfolioTab === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === portfolioTab
        );

  return (
    <div style={pageStyle}>
      {/* HERO */}
      <div style={eliteCardLarge}>
        <h1 style={eliteHeading}>Portfolio</h1>

        <p
          style={{
            ...bodyText,
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "22px",
          }}
        >
          Premium dashboards, visual systems,
          brand identities and assets designed
          to grow businesses.
        </p>
      </div>

      {/* FILTERS */}
      <div
        style={{
          display: "flex",
          gap: "14px",
          flexWrap: "wrap",
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
              padding: "14px 24px",
              borderRadius: "40px",
              border:
                portfolioTab === tab
                  ? "1px solid #ffd700"
                  : "1px solid rgba(255,215,0,0.08)",
              background:
                portfolioTab === tab
                  ? "linear-gradient(135deg,#2a2500,#111)"
                  : "#0d0d0d",
              color:
                portfolioTab === tab
                  ? "#ffd700"
                  : "#fff",
              fontWeight: "800",
              cursor: "pointer",
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
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "26px",
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
                ...eliteCard,
                padding: 0,
                overflow: "hidden",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const img =
                  e.currentTarget.querySelector("img");
                const overlay =
                  e.currentTarget.querySelector(
                    ".overlay"
                  );

                img.style.transform = "scale(1.06)";
                overlay.style.opacity = "1";

                e.currentTarget.style.transform =
                  "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                const img =
                  e.currentTarget.querySelector("img");
                const overlay =
                  e.currentTarget.querySelector(
                    ".overlay"
                  );

                img.style.transform = "scale(1)";
                overlay.style.opacity = "0";

                e.currentTarget.style.transform =
                  "translateY(0px)";
              }}
            >
              {/* IMAGE */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    transition: "0.45s ease",
                  }}
                />

                {/* EYE OVERLAY */}
                <div
                  className="overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "rgba(0,0,0,0.55)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "0.35s ease",
                  }}
                >
                  <div
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      background:
                        "rgba(255,215,0,0.95)",
                      color: "#000",
                      fontSize: "34px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "900",
                      boxShadow:
                        "0 0 25px rgba(255,215,0,0.35)",
                    }}
                  >
                    👁
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div style={{ padding: "24px" }}>
                <p
                  style={{
                    color: "#ffd700",
                    fontSize: "13px",
                    fontWeight: "800",
                    marginBottom: "10px",
                  }}
                >
                  {item.category}
                </p>

                <h3
                  style={{
                    color: "#fff",
                    fontSize: "28px",
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>

                <p style={bodyText}>
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