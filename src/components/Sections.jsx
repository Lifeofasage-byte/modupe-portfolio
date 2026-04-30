import React from "react";

import AboutSection from "./AboutSection";
import ResumeSection from "./ResumeSection";
import PortfolioSection from "./PortfolioSection";
import TestimonialsSection from "./TestimonialsSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";

function Sections({ activeSection }) {
  switch (activeSection) {
    case "resume":
      return <ResumeSection />;

    case "portfolio":
      return <PortfolioSection />;

    case "testimonials":
      return <TestimonialsSection />;

    case "blog":
      return <BlogSection />;

    case "contact":
      return <ContactSection />;

    default:
      return <AboutSection />;
  }
}

export default Sections;