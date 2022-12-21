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
      {
        para1:
          "Do you need a comprehensive understanding of the feasibility of your proposed new business venture? Are you looking to gain insight into the potential market for your product or service?",
        para2:
          "At Tecbix, we offer comprehensive feasibility and market analysis services to help you better understand the potential of your new business. Our team of experts will conduct extensive research and analysis to provide you with essential information about the potential of your venture.",
        para3:
          "We will take the time to understand your unique business and provide you with the necessary data to make informed decisions. Our team will evaluate the current market trends, competitive landscape, and customer feedback to provide you with the insights you need. Additionally, we will assess the potential profitability of your venture and identify any potential risks or opportunities.",
        para4:
          "When you work with ABC Consulting, you can rest assured that you have access to the latest market information and data analysis. Our services are designed to help you make the most informed decision when launching a new business. Contact us today to learn more about our feasibility and market analysis services.",
      },
      {
        para1:
          "Are you looking for an effective way to enhance your brand's image? Our corporate graphic design services can help you create a powerful and lasting impression.",
        para2:
          "At Tecbix, we understand that your brand is a reflection of your company's values, goals and culture. That's why our team of experienced designers will work closely with you to craft a unique look and feel that resonates with your target audience. With years of experience in developing corporate brand identities, we have the skills and expertise to create an eye-catching and memorable design that will make your company stand out from the crowd.",
        para3:
          "We use the latest technologies and industry trends to create a modern, impactful and professional design for your brand. From logos and brochures to websites and digital presentations, we can create a comprehensive corporate design package that will help you to communicate your message and values effectively.",
        para4:
          "Our corporate graphic designs are also affordable and will deliver a great return on your investment. We take the time to understand your business and develop a design that's both creative and cost-effective. We'll also provide ongoing support and advice to ensure that your design remains relevant and effective.",
        para5:
          "We believe that great design should be accessible to all businesses, regardless of size. So why not get in touch.",
      },
      {
        para1:
          "Are you looking to set up a social media business profile? Look no further!",
        para2:
          "Having a strong social media presence is crucial for any business in today's digital age. Not only does it help you connect with your target audience, but it also allows you to showcase your products and services to a wider range.",
        para3:
          "Our social media business profile setup service can help you get started on the right track. We will work with you to create a cohesive and visually appealing profile, complete with all the necessary information and branding elements.",
        para4:
          "We will also help you choose the right social media platforms for your business, and provide guidance on how to effectively use them to connect with and engage your audience.",
        para5:
          "Our team of social media experts will handle everything from setting up the profile to creating and scheduling engaging content. This will save you time and allow you to focus on running your business.",
        para6:
          "Don't miss out on the many benefits of having a strong social media presence. Contact us today to learn more about our social media business profile setup service.",
      },
      {
        para1:
          "Are you looking to advertise your business, but not sure where to start? Our beginner's advertisement setup service is here to help!",
        para2:
          "Advertising can be a powerful tool for reaching new customers and growing your business. However, it can also be overwhelming for those who are new to the world of advertising. That's where we come in.",
        para3:
          "Our team of experienced professionals will work with you to create a customized advertising plan that fits your budget and meets your business goals. We'll help you choose the right platforms and targeting options to ensure that your ads reach the right audience.",
        para4:
          "We'll also handle the technical aspects of setting up and running your ads, so you can focus on running your business. Plus, we'll provide ongoing support and analysis to help you get the most out of your advertising efforts.",
        para5:
          "Don't let a lack of advertising experience hold you back. Contact us today to learn more about our beginner's advertisement setup service. We'll help you get started on the path to success.",
      },
      {
        para1:
          "Are you in need of a website for your business, but not sure where to start? Look no further!",
        para2:
          "Having a website is essential for any business in today's digital age. It serves as a online storefront and allows you to reach a wider audience. It's also an important part of a company's overall marketing strategy.",
        para3:
          "Our website design and development service can help you create a professional and visually appealing website that showcases your products and services to your target audience. We'll work with you to understand your business goals and create a customized website that meets your needs and budget.",
        para4:
          "Our team of web design experts will handle everything from the initial design to the final development, ensuring that your website is easy to use and navigate. We'll also provide ongoing support and maintenance to ensure that your website stays up to date and running smoothly.",
        para5:
          "Don't miss out on the many benefits of having a website. Contact us today to learn more about our website design and development service. We'll help you get your business online and on the path to success.",
      },
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
