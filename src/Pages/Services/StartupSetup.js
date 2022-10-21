import React from "react";

import Services from "../../Components/Services";

const StartupSetup = () => {
  const data = {
    title: "Starup Setup",
    description:
      "Startup Setup is an idea to support emerging startups in their early stages. The support can be provided through a specific service or a group of services as a package. It is a one time support to act as a kick-starter for a business.",
  };
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Services {...data} />
    </div>
  );
};

export default StartupSetup;
