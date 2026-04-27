import React from "react";
import { goldBtn } from "../styles";

function Sidebar({ timeNow }) {
  const infoItems = [
    ["EMAIL", "hiremodupe@gmail.com", "✉"],
    ["PHONE", "+234 703 482 8731", "☎"],
    ["LOCATION", "Lagos, Nigeria", "⌂"],
    ["FOCUS", "Power BI • Excel • SQL", "◉"],
  ];

  return (
    <aside
      style={{
        background: "linear-gradient(145deg,#111111,#0b0b0b)",
        borderRadius: "30px",
        border: "1px solid rgba(255,215,0,0.08)",
        padding: "30px",
        width: "100%",
        boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
      }}
    >
      {/* CLOCK */}
      <div
        style={{
          color: "#D4AF37",
          fontSize: "24px",
          fontWeight: "800",
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        {timeNow}
      </div>

      {/* PROFILE */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <img
          src="/profile.jpg"
          alt="Profile"
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #D4AF37",
            marginBottom: "18px",
          }}
        />

        <h2
          style={{
            color: "#fff",
            fontSize: "34px",
            margin: "0 0 8px 0",
            fontWeight: "800",
            lineHeight: "1.1",
          }}
        >
          Modupe S. O
        </h2>

        <p
          style={{
            color: "#D4AF37",
            margin: 0,
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Data & BI Consultant
        </p>
      </div>

      {/* DOWNLOAD CV */}
      <a
        href="/Modupe_CV.pdf"
        download
        style={{
          ...goldBtn,
          display: "block",
          textAlign: "center",
          marginBottom: "28px",
        }}
      >
        Download CV
      </a>

      {/* INFO GRID */}
      <div
        style={{
          display: "grid",
          gap: "16px",
        }}
      >
        {infoItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "46px 1fr",
              gap: "14px",
              alignItems: "center",
              padding: "14px",
              borderRadius: "18px",
              background: "#0f0f0f",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "14px",
                background: "#151515",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#D4AF37",
                fontSize: "18px",
              }}
            >
              {item[2]}
            </div>

            <div>
              <div
                style={{
                  color: "#777",
                  fontSize: "12px",
                  letterSpacing: "1px",
                  marginBottom: "4px",
                }}
              >
                {item[0]}
              </div>

              <div
                style={{
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {item[1]}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SOCIAL DOTS */}
      <div
        style={{
          marginTop: "26px",
          display: "flex",
          justifyContent: "center",
          gap: "14px",
          color: "#D4AF37",
          fontSize: "20px",
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