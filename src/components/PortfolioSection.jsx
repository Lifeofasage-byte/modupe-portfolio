import React, { useState, useEffect } from "react";

function PortfolioSection() {
  const [portfolioTab, setPortfolioTab] =
    useState("All");

  const [screenWidth, setScreenWidth] =
    useState(window.innerWidth);

  const [hoveredCard, setHoveredCard] =
    useState(null);

  const [hoveredTab, setHoveredTab] =
    useState("");

  useEffect(() => {
    const handleResize = () =>
      setScreenWidth(window.innerWidth);

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  const isMobile =
    screenWidth < 768;

  const isTablet =
    screenWidth >= 768 &&
    screenWidth < 1100;

  const portfolioItems = [
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
    {
      title: "Marketing Dashboard",
      category: "Dashboards",
      image: "/dashboards/marketing.png",
      desc: "Campaign ROI, lead funnels and growth performance.",
      link: "/dashboards/marketing.png",
    },
  ];

  const filtered =
    portfolioTab === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) =>
            item.category === portfolioTab
        );

  const tabs = [
    "All",
    "Dashboards",
    "Graphic Design",
    "Branding",
  ];

  return (
    <div
      style={{
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
        {tabs.map((tab) => {
          const active =
            portfolioTab === tab;

          const hover =
            hoveredTab === tab;

          return (
            <button
              key={tab}
              onClick={() =>
                setPortfolioTab(tab)
              }
              onMouseEnter={() =>
                setHoveredTab(tab)
              }
              onMouseLeave={() =>
                setHoveredTab("")
              }
              style={{
                padding: isMobile
                  ? "12px 18px"
                  : "14px 24px",

                borderRadius: "50px",

                border: active
                  ? "1px solid #D4AF37"
                  : "1px solid rgba(255,255,255,0.08)",

                background: active
                  ? "#151515"
                  : hover
                  ? "#111"
                  : "#0c0c0c",

                color: active
                  ? "#D4AF37"
                  : "#fff",

                fontWeight: "700",

                cursor: "pointer",

                transform: hover
                  ? "translateY(-2px)"
                  : "translateY(0)",

                boxShadow: hover
                  ? "0 10px 20px rgba(0,0,0,0.25)"
                  : "none",

                transition:
                  "all 0.28s ease",
              }}
            >
              {tab}
            </button>
          );
        })}
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
        {filtered.map((item, index) => {
          const hover =
            hoveredCard === index;

          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() =>
                setHoveredCard(index)
              }
              onMouseLeave={() =>
                setHoveredCard(null)
              }
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(145deg,#0d0d0d,#141414)",

                  border: hover
                    ? "1px solid rgba(212,175,55,0.35)"
                    : "1px solid rgba(255,255,255,0.05)",

                  borderRadius: "24px",

                  overflow: "hidden",

                  cursor: "pointer",

                  transform: hover
                    ? "translateY(-8px)"
                    : "translateY(0)",

                  boxShadow: hover
                    ? "0 20px 40px rgba(0,0,0,0.35)"
                    : "none",

                  transition:
                    "all 0.32s ease",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: isMobile
                      ? "220px"
                      : "260px",

                    objectFit: "cover",

                    transform: hover
                      ? "scale(1.05)"
                      : "scale(1)",

                    transition:
                      "all 0.4s ease",
                  }}
                />

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
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioSection;