import React from "react";
import { goldBtn } from "../styles";

function Sidebar({ timeNow }) {
  const infoItem = (icon, label, value) => (
    <div
      style={{
        display: "flex",
        gap: "14px",
        alignItems: "flex-start",
        marginBottom: "24px",
      }}
    >
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "12px",
          background: "#141414",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "gold",
          fontSize: "18px",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      <div>
        <div
          style={{
            fontSize: "13px",
            color: "#888",
            marginBottom: "4px",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          {label}
        </div>

        <div
          style={{
            color: "#fff",
            fontSize: "16px",
            lineHeight: "1.5",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );

  return (
    <aside
      style={{
        background: "#111",
        borderRadius: "30px",
        border: "1px solid rgba(255,215,0,0.08)",
        padding: "34px",
        minHeight: "92vh",
        position: "sticky",
        top: "34px",
        boxShadow: "0 0 30px rgba(255,215,0,0.05)",
        width: "100%",
      }}
    >
      <div style={{ color: "gold", fontSize: "24px", marginBottom: "26px" }}>
        {timeNow}
      </div>

      <div style={{ textAlign: "center", marginBottom: "34px" }}>
        <img
          src="/profile.jpg"
          alt="Profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid gold",
            marginBottom: "20px",
          }}
        />

        <h2
  style={{
    fontSize: "40px",
    marginBottom: "10px",
    color: "#ffffff",
    fontWeight: "800",
    lineHeight: "1.1",
    letterSpacing: "-0.5px",
    textShadow: "0 2px 10px rgba(0,0,0,0.55)",
  }}
>
          Modupe S. O
        </h2>

        <p
          style={{
            color: "gold",
            marginTop: "10px",
            fontSize: "17px",
          }}
        >
          Data & BI Consultant
        </p>
      </div>

      <a
        href="/Modupe_CV.pdf"
        download
        style={goldBtn}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow =
      "0 18px 40px rgba(255,215,0,0.28)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.boxShadow =
      "0 10px 24px rgba(255,215,0,0.14)";
  }}
>
  Download CV
</a>

      <div
  style={{
    marginTop: "34px",
    display: "grid",
    gap: "18px",
  }}
>
  {[
    ["EMAIL", "hiremodupe@gmail.com", "✉"],
    ["PHONE", "+234 703 482 8731", "☎"],
    ["LOCATION", "Lagos, Nigeria", "⌂"],
    ["FOCUS", "Power BI • Excel • SQL", "◉"],
  ].map((item, index) => (
    <div
      key={index}
      style={{
        display: "grid",
        gridTemplateColumns: "48px 1fr",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "14px",
          background: "#0f0f0f",
          border: "1px solid rgba(255,215,0,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "gold",
          fontSize: "18px",
        }}
      >
        {item[2]}
      </div>

      <div>
        <div
          style={{
            fontSize: "13px",
            color: "#7f7f7f",
            letterSpacing: "1px",
            marginBottom: "4px",
          }}
        >
          {item[0]}
        </div>

        <div
          style={{
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          {item[1]}
        </div>
      </div>
    </div>
  ))}
</div>
<div
  style={{
    marginTop: "28px",
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    color: "gold",
    fontSize: "22px",
  }}
>
  <span>◎</span>
  <span>◉</span>
  <span>◌</span>
</div>
    </aside>
  );
}

export default Sidebar;