import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [timeNow, setTimeNow] = useState("");

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

  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth < 1024;

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, rgba(255,215,0,0.06), transparent 30%), linear-gradient(135deg,#050505,#0b0b0b,#101010)",
        color: "#fff",
        padding: isMobile ? "14px" : "30px",
        fontFamily: "Inter, Poppins, sans-serif",
      }}
    >
      {/* MASTER WRAPPER */}
      <div
        style={{
          maxWidth: "1650px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "350px 1fr",
          gap: isMobile ? "18px" : "28px",
          alignItems: "start",
        }}
      >
        {/* SIDEBAR */}
        <div
          style={{
            animation: "fadeLeft 0.7s ease",
          }}
        >
          <Sidebar timeNow={timeNow} />
        </div>

        {/* MAIN PANEL */}
        <div
          style={{
            minHeight: "calc(100vh - 60px)",
            display: "flex",
            flexDirection: "column",
            borderRadius: "34px",
            overflow: "hidden",
            background:
              "linear-gradient(145deg,#111111,#0b0b0b)",
            border: "1px solid rgba(255,215,0,0.06)",
            boxShadow:
              "0 18px 50px rgba(0,0,0,0.45), 0 0 28px rgba(255,215,0,0.04)",
            animation: "fadeUp 0.75s ease",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* TOP NAV BAR */}
          <div
            style={{
              padding: isMobile ? "18px" : "24px 30px",
              borderBottom:
                "1px solid rgba(255,215,0,0.05)",
              background:
                "linear-gradient(180deg,#141414,#101010)",
              position: "relative",
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
                  "linear-gradient(90deg,transparent,#ffd700,transparent)",
                opacity: 0.55,
              }}
            />

            <Navbar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>

          {/* CONTENT AREA */}
          <div
            style={{
              flex: 1,
              padding: isMobile ? "22px" : "36px",
              overflowY: "auto",
              scrollBehavior: "smooth",
            }}
          >
            <Sections activeSection={activeSection} />
          </div>
        </div>
      </div>

      {/* GLOBAL ANIMATIONS */}
      <style>{`
        *{
          box-sizing:border-box;
        }

        body{
          margin:0;
          padding:0;
          background:#050505;
        }

        ::-webkit-scrollbar{
          width:8px;
        }

        ::-webkit-scrollbar-track{
          background:#0b0b0b;
        }

        ::-webkit-scrollbar-thumb{
          background:#333;
          border-radius:10px;
        }

        ::-webkit-scrollbar-thumb:hover{
          background:#555;
        }

        @keyframes fadeCard{
          from{
            opacity:0;
            transform:translateY(18px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
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
            transform:translateX(-25px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;