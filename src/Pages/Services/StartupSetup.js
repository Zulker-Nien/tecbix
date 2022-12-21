import React from "react";
import Footer from "../../Components/Footer";

import Services from "../../Components/Services";
const StartupSetup = () => {
  const data = {
    title: "Startup Setup",
    description:
      "Startup Setup is an idea to support emerging startups in their early stages. The support can be provided through a specific service or a group of services as a package. It is a one time support to act as a kick-starter for a business.",
    serviceHeaders: [
      "Quick Feasibility Check",
      "Corporate Identity Setup",
      "Social Media Setup",
      "Beginner’s Advertisement",
      "Website",
    ],
    serviceDesc: [
      "Though a sunk cost, feasibility analysis is essential for risk reduction of any business at its initial stage. This consists of micro and macro environmental analysis, competitor analysis, financial analysis (break-even) and marketing analysis. Tecbix will use proven tools to conduct basic business research covering the crucial aspects of a business to help prevent potential loss.",
      "Corporate Identity is how a company chooses to represent itself to potential/existing clients. Upon discussion and clear understanding of chosen identity type, Tecbix will develop the logo, design with aligning fonts and create advertisement posters(Maximum: 3) that represent the personality of the brand. ",
      "Social Media Setup consists of setting up the first appearance of a company over a wide range of media including LinkedIn, Facebook, Instagram, Twitter. Under this service, corporate identity can be created on demand. Social media can be set up using existing identity. Tecbix will create a range of basic initializing tools (Maximum: 5) including profile and cover photo for ease of transiting onto a platform.",
      "This onboarding marketing kit consists of a short-term online campaign planning and execution based on budget. Primarily it entails social media marketing, advertisement, engagement and SEO. For thorough or long term marketing plans and products, please refer to Marketing Business Plan.",
      "Website as a product. Based on the requirement of the client upon discussion, Tecbix designs a static or dynamic website and hands it over to the client when met with satisfaction. Under this service, we do not offer website maintenance. For more information, check software development.",
    ],
  };

  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <Services {...data} />
      </div>
      <Footer />
    </>
  );
};

export default StartupSetup;
