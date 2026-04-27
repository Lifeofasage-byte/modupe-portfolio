import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";

function App() {
  const [activeSection, setActiveSection] =
    useState("about");

  const [timeNow, setTimeNow] = useState("");

  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth
  );

  /* LIVE CLOCK */
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTimeNow(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateClock();

    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  /* RESPONSIVE LISTENER */
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

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

  const isMobile = screenWidth < 768;
  const isTablet =
    screenWidth >= 768 &&
    screenWidth < 1100;

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, rgba(212,175,55,0.08), transparent 28%), linear-gradient(135deg,#040404,#090909,#111111)",
        color: "#fff",
        padding: isMobile
          ? "12px"
          : isTablet
          ? "18px"
          : "30px",
        fontFamily:
          "Inter, Poppins, sans-serif",
      }}
    >
      {/* MAIN WRAPPER */}
      <div
        style={{
          maxWidth: "1650px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
            ? "1fr"
            : "340px 1fr",
          gap: isMobile
            ? "14px"
            : "26px",
          alignItems: "start",
        }}
      >
        {/* SIDEBAR / TOP CARD MOBILE */}
        <div
          style={{
            order: isMobile ? 1 : 0,
            position: isMobile
              ? "relative"
              : "sticky",
            top: isMobile ? "0" : "30px",
            animation:
              "fadeLeft 0.7s ease",
            zIndex: 5,
          }}
        >
          <Sidebar timeNow={timeNow} />
        </div>

        {/* RIGHT PANEL */}
        <div
          style={{
            order: isMobile ? 2 : 0,
            minHeight: isMobile
              ? "auto"
              : "calc(100vh - 60px)",
            display: "flex",
            flexDirection: "column",
            borderRadius: isMobile
              ? "24px"
              : "34px",
            overflow: "hidden",
            background:
              "linear-gradient(145deg,#111,#0b0b0b)",
            border:
              "1px solid rgba(255,255,255,0.05)",
            boxShadow:
              "0 20px 55px rgba(0,0,0,0.45)",
            animation:
              "fadeUp 0.8s ease",
            backdropFilter:
              "blur(10px)",
          }}
        >
          {/* NAVBAR */}
          <div
            style={{
              padding: isMobile
                ? "14px 14px"
                : isTablet
                ? "18px 20px"
                : "24px 30px",
              borderBottom:
                "1px solid rgba(255,255,255,0.04)",
              background:
                "linear-gradient(180deg,#151515,#101010)",
              position: "sticky",
              top: 0,
              zIndex: 20,
            }}
          >
            {/* GOLD TOP LINE */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "1px",
                background:
                  "linear-gradient(90deg,transparent,#D4AF37,transparent)",
                opacity: 0.55,
              }}
            />

            <Navbar
              activeSection={
                activeSection
              }
              setActiveSection={
                setActiveSection
              }
            />
          </div>

          {/* CONTENT */}
          <div
            style={{
              flex: 1,
              padding: isMobile
                ? "18px"
                : isTablet
                ? "24px"
                : "38px",
              overflowY: "auto",
              scrollBehavior:
                "smooth",
            }}
          >
            <Sections
              activeSection={
                activeSection
              }
            />
          </div>
        </div>
      </div>

      {/* FLOATING MOBILE CTA */}
      {isMobile && (
        <a
          href="https://wa.me/2347034828731"
          target="_blank"
          rel="noreferrer"
          style={{
            position: "fixed",
            right: "16px",
            bottom: "18px",
            zIndex: 100,
            background:
              "#25D366",
            color: "#fff",
            padding:
              "14px 18px",
            borderRadius:
              "50px",
            fontWeight: "800",
            textDecoration:
              "none",
            boxShadow:
              "0 12px 25px rgba(0,0,0,0.25)",
            fontSize: "14px",
          }}
        >
          WhatsApp
        </a>
      )}

      {/* GLOBAL STYLE */}
      <style>{`
        *{
          box-sizing:border-box;
        }

        html,body,#root{
          margin:0;
          padding:0;
          min-height:100%;
          background:#050505;
        }

        body{
          overflow-x:hidden;
        }

        ::-webkit-scrollbar{
          width:8px;
        }

        ::-webkit-scrollbar-track{
          background:#0b0b0b;
        }

        ::-webkit-scrollbar-thumb{
          background:#2c2c2c;
          border-radius:10px;
        }

        ::-webkit-scrollbar-thumb:hover{
          background:#444;
        }

        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes fadeLeft{
          from{
            opacity:0;
            transform:translateX(-30px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        @media (max-width:767px){
          body{
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </div>
  );
}

export default App;