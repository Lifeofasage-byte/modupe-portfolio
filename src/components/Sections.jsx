import React from "react";

import AboutSection from "../AboutSection.jsx";
import ResumeSection from "../ResumeSection.jsx";
import PortfolioSection from "../PortfolioSection.jsx";
import BlogSection from "../BlogSection.jsx";
import ContactSection from "../ContactSection.jsx";

function Sections({ activeSection }) {
  switch (activeSection) {
    case "resume":
      return <ResumeSection />;

    case "portfolio":
      return <PortfolioSection />;

    case "blog":
      return <BlogSection />;

    case "contact":
      return <ContactSection />;

    default:
      return <AboutSection />;
  }
}

export default Sections;