import React, { useState, useEffect } from "react";

function TestimonialsSection() {
const [screenWidth, setScreenWidth] = useState(window.innerWidth);

useEffect(() => {
const handleResize = () => setScreenWidth(window.innerWidth);
window.addEventListener("resize", handleResize);
return () => window.removeEventListener("resize", handleResize);
}, []);

const isMobile = screenWidth < 768;
const isTablet = screenWidth >= 768 && screenWidth < 1100;

const testimonials = [
{
name: "Retail Founder",
country: "Nigeria",
text: "Modupe built premium dashboards that helped us track growth clearly.",
},
{
name: "Startup CEO",
country: "UK",
text: "Fast delivery, elite visuals and very strategic execution.",
},
{
name: "Operations Lead",
country: "Canada",
text: "Professional work ethic with clean reporting systems.",
},
];

const brands = [
{ image: "/branding/sage-branding.png" },
{ image: "/branding/luxury-logo-system.png" },
{ image: "/graphics/real-estate-poster.png" },
{ image: "/branding/restaurant-brand-identity.png" },
{ image: "/graphics/corporate-flyer.png" },
{ image: "/graphics/business-flyer.png" },
];

return (
<div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>

```
  {/* HERO */}
  <div
    style={{
      background: "linear-gradient(145deg,#0b0b0b,#111)",
      border: "1px solid rgba(255,255,255,0.05)",
      borderRadius: "28px",
      padding: isMobile ? "28px 18px" : "55px 40px",
      textAlign: "center",
    }}
  >
    <p style={{ color: "#D4AF37", letterSpacing: "3px", fontWeight: "700" }}>
      TRUST & RESULTS
    </p>

    <h1
      style={{
        color: "#fff",
        fontSize: isMobile ? "34px" : isTablet ? "56px" : "76px",
        fontWeight: "900",
      }}
    >
      Testimonials
    </h1>

    <p style={{ color: "#9e9e9e", maxWidth: "760px", margin: "0 auto" }}>
      Trusted by founders, teams and brands who expect premium execution.
    </p>
  </div>

  {/* TESTIMONIAL CARDS */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
        ? "repeat(2,1fr)"
        : "repeat(3,1fr)",
      gap: "28px",
    }}
  >
    {testimonials.map((item, index) => (
      <div
        key={index}
        style={{
          background: "linear-gradient(145deg,#0d0d0d,#151515)",
          borderRadius: "24px",
          padding: "30px",
          border: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.35s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
          e.currentTarget.style.boxShadow =
            "0 25px 60px rgba(212,175,55,0.18)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Glow border */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            borderRadius: "24px",
            background:
              "linear-gradient(120deg, transparent, rgba(212,175,55,0.25), transparent)",
            opacity: 0,
            transition: "0.4s",
          }}
        />

        {/* Quote */}
        <div style={{ color: "#D4AF37", fontSize: "28px" }}>
          “
        </div>

        <p
          style={{
            color: "#cfcfcf",
            lineHeight: "1.8",
            fontSize: "15px",
            margin: "15px 0 25px",
          }}
        >
          {item.text}
        </p>

        {/* User */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "#D4AF37",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "800",
              color: "#000",
            }}
          >
            {item.name.charAt(0)}
          </div>

          <div>
            <h4 style={{ color: "#fff", margin: 0 }}>{item.name}</h4>
            <span style={{ color: "#888", fontSize: "13px" }}>
              {item.country}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* BRANDS SCROLLER */}
  <div
    style={{
      position: "relative",
      overflow: "hidden",
      borderRadius: "24px",
      background: "#0b0b0b",
      border: "1px solid rgba(255,255,255,0.05)",
      padding: "30px 0",
    }}
  >
    <div
      style={{
        display: "flex",
        gap: "60px",
        animation: "scroll 25s linear infinite",
      }}
    >
      {[...brands, ...brands].map((brand, index) => (
        <img
          key={index}
          src={brand.image}
          alt="brand"
          style={{
            height: "60px",
            objectFit: "contain",
            filter: "grayscale(100%)",
            opacity: 0.7,
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = "none";
            e.currentTarget.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "grayscale(100%)";
            e.currentTarget.style.opacity = "0.7";
          }}
        />
      ))}
    </div>

    {/* Fade edges */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "80px",
        background: "linear-gradient(to right,#0b0b0b,transparent)",
      }}
    />
    <div
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "80px",
        background: "linear-gradient(to left,#0b0b0b,transparent)",
      }}
    />
  </div>

  <style>
  {`
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}
</style>

</div>   
  );
}

export default TestimonialsSection;
