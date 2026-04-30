import React, { useState } from "react";

function Navbar({
  activeSection,
  setActiveSection,
}) {
  const [hovered, setHovered] =
    useState("");

  const screenWidth =
    window.innerWidth;

  const isMobile =
    screenWidth < 768;

  const isTablet =
    screenWidth >= 768 &&
    screenWidth < 1100;

  const navItems = [
    "about",
    "resume",
    "portfolio",
    "testimonials",
    "blog",
    "contact",
  ];

  return (
    <header
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: isMobile
            ? "10px"
            : "14px",
          flexWrap: "nowrap",
          justifyContent: isMobile
            ? "flex-start"
            : "center",
          alignItems: "center",
          overflowX: "auto",
          paddingBottom:
            isMobile ? "4px" : "0",
          scrollbarWidth:
            "none",
          msOverflowStyle:
            "none",
        }}
      >
        {navItems.map((item) => {
          const active =
            activeSection === item;

          const hover =
            hovered === item;

          return (
            <button
              key={item}
              onClick={() =>
                setActiveSection(item)
              }
              onMouseEnter={() =>
                setHovered(item)
              }
              onMouseLeave={() =>
                setHovered("")
              }
              style={{
                flexShrink: 0,
                border: "none",
                cursor: "pointer",
                textTransform:
                  "capitalize",
                whiteSpace:
                  "nowrap",
                outline: "none",

                padding: isMobile
                  ? "12px 18px"
                  : isTablet
                  ? "14px 22px"
                  : "16px 26px",

                borderRadius:
                  isMobile
                    ? "14px"
                    : "18px",

                fontSize: isMobile
                  ? "14px"
                  : "16px",

                fontWeight: active
                  ? "800"
                  : "600",

                letterSpacing:
                  "0.2px",

                color: active
                  ? "#D4AF37"
                  : "#ffffff",

                background:
                  active
                    ? "linear-gradient(135deg, rgba(212,175,55,0.22), rgba(212,175,55,0.07))"
                    : hover
                    ? "rgba(255,255,255,0.04)"
                    : "transparent",

                border: active
                  ? "1px solid rgba(212,175,55,0.28)"
                  : hover
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(255,255,255,0.05)",

                boxShadow: active
                  ? "0 12px 28px rgba(212,175,55,0.14)"
                  : hover
                  ? "0 8px 20px rgba(0,0,0,0.25)"
                  : "none",

                transform: hover
                  ? "translateY(-3px)"
                  : "translateY(0)",

                transition:
                  "all 0.28s ease",

                WebkitTapHighlightColor:
                  "transparent",
              }}
            >
              {item}
            </button>
          );
        })}
      </div>

      {isMobile && (
        <div
          style={{
            marginTop: "8px",
            textAlign: "center",
            fontSize: "11px",
            color: "#666",
            letterSpacing:
              "1px",
          }}
        >
          Swipe menu →
        </div>
      )}
    </header>
  );
}

export default Navbar;