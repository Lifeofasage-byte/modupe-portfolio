import React, { useState } from "react";

function Navbar({ activeSection, setActiveSection }) {
  const [hovered, setHovered] = useState("");

  const navItems = [
    "about",
    "resume",
    "portfolio",
    "blog",
    "contact",
  ];

  return (
    <header
      style={{
        padding: "24px 34px",
        borderBottom: "1px solid rgba(255,215,0,0.08)",
        background:
          "linear-gradient(180deg,#141414,#111)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          display: "flex",
gap: "14px",
flexWrap: "nowrap",
justifyContent: "center",
alignItems: "center",
overflowX: "auto",
        }}
      >
        {navItems.map((item) => {
          const active = activeSection === item;
          const hover = hovered === item;

          return (
            <button
              key={item}
              onClick={() => setActiveSection(item)}
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered("")}
              style={{
  border: "none",
  cursor: "pointer",
  padding: "16px 26px",
  borderRadius: "16px",
  fontSize: "16px",
  textTransform: "capitalize",
  fontWeight: active ? "700" : "500",

  color: active ? "gold" : "#ffffff",

  background: active
    ? "linear-gradient(135deg, rgba(255,215,0,0.22), rgba(255,215,0,0.08))"
    : hover
    ? "rgba(255,255,255,0.03)"
    : "transparent",

  border: "1px solid rgba(255,215,0,0.06)",

  boxShadow: active
    ? "0 0 22px rgba(255,215,0,0.12)"
    : "none",

  transition: "all 0.28s ease",
}}
            >
              {item}
            </button>
          );
        })}
      </div>
    </header>
  );
}

export default Navbar;