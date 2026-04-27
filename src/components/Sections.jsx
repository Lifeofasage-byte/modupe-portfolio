import React from "react";

import Aboutsection from "../Aboutsection";
import Resumesection from "../Resumesection";
import Portfoliosection from "../Portfoliosection";
import Blogsection from "../Blogsection";
import Contactsection from "../Contactsection";

function Sections({ activeSection }) {
  if (activeSection === "about") {
    return <Aboutsection />;
  }

  if (activeSection === "resume") {
    return <Resumesection />;
  }

  if (activeSection === "portfolio") {
    return <Portfoliosection />;
  }

  if (activeSection === "blog") {
    return <Blogsection />;
  }

  if (activeSection === "contact") {
    return <Contactsection />;
  }

  return <Aboutsection />;
}

export default Sections;