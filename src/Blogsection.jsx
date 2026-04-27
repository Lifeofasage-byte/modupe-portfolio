import React from "react";
import { blogPosts } from "./data";

function Blogsection() {
  const isMobile = window.innerWidth < 768;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "28px",
      }}
    >
      {/* HERO */}
      <div
        style={{
          background: "linear-gradient(145deg,#0b0b0b,#111)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "28px",
          padding: isMobile ? "30px 20px" : "55px 40px",
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
          KNOWLEDGE HUB
        </p>

        <h1
          style={{
            color: "#fff",
            fontSize: isMobile ? "40px" : "72px",
            fontWeight: "900",
            marginBottom: "16px",
            lineHeight: "1",
          }}
        >
          Insights
        </h1>

        <p
          style={{
            color: "#9e9e9e",
            fontSize: isMobile ? "16px" : "20px",
            maxWidth: "760px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          Practical thoughts on dashboards, business intelligence,
          reporting systems and modern growth strategy.
        </p>
      </div>

      {/* BLOG GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit,minmax(320px,1fr))",
          gap: "24px",
        }}
      >
        {blogPosts.map((item, index) => (
          <div
            key={index}
            style={{
              background:
                "linear-gradient(145deg,#0d0d0d,#141414)",
              border:
                "1px solid rgba(255,255,255,0.05)",
              borderRadius: "24px",
              overflow: "hidden",
              transition: "0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 20px 45px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
              }}
            />

            {/* CONTENT */}
            <div style={{ padding: "24px" }}>
              <p
                style={{
                  color: "#D4AF37",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  marginBottom: "10px",
                  fontWeight: "700",
                }}
              >
                ARTICLE
              </p>

              <h3
                style={{
                  color: "#fff",
                  fontSize: "24px",
                  fontWeight: "800",
                  marginBottom: "14px",
                  lineHeight: "1.3",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#9e9e9e",
                  fontSize: "15px",
                  lineHeight: "1.7",
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogsection;