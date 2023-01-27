import React from "react";
import Footer from "../../Components/Footer";

import Services from "../../Components/Services";
const StartupSetup = () => {
  const data = {
    title: "Software Development",
    serviceHeaders: [
      "Quick feasibility check",
      "Corporate identity setup",
      "Social media setup",
      "Beginner's advertising setup",
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
          "When you work with Tecbix, you can rest assured that you have access to the latest market information and data analysis. ",
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
          "Our team of social media experts will handle everything from setting up the profile to creating and scheduling engaging content to get started. This will save you time and allow you to focus on running your business.",
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
    ],
    serviceBenefit: [
      {
        para1:
          "Feasibility and market analysis are important tools for businesses, as they provide valuable information and insights that can help inform decision-making and drive business growth. Some specific benefits of conducting feasibility and market analysis include:",
        para2:
          "Reduced risk: With the analysis you can calculate the risks and make mitigations plan according to your need which in turn reduces cost and damages.",
        para3:
          "Improved decision-making: Feasibility and market analysis provide a comprehensive understanding of the potential risks, costs, and benefits of a business venture, which can help you make informed decisions about whether to pursue it or not.",
        para4:
          "Enhanced competitiveness: By analyzing the market and identifying opportunities for differentiation, you can position your business for success and stay ahead of the competition.",
        para5:
          "Increased revenue: By targeting the right market segments and tailoring your products or services to meet their needs, you can increase your revenue and grow your business.",
        para6:
          "Reduced risk: By analyzing the potential risks and challenges in your market, you can develop contingency plans and minimize the impact of potential disruptions on your business",
        para7:
          "Enhanced market positioning: By understanding the competitive landscape and positioning your business appropriately, you can attract the right customers and build a strong market position.",
        para8:
          "Improved resource allocation: By identifying the most promising market segments and opportunities, you can allocate your resources more efficiently and effectively.",
      },
      {
        para1:
          "Increased brand recognition: A strong brand identity helps customers easily recognize and remember your business. This can lead to increased loyalty and repeat business.",
        para2:
          "Differentiation from competitors: A unique brand identity sets you apart from your competitors, helping you stand out in a crowded market.",
        para3:
          "Professional image: A well-defined brand identity conveys a professional image, helping customers trust and believe in your business.",
        para4:
          "Improved customer experience: A cohesive brand identity helps create a consistent experience for customers across all touchpoints, which can improve customer satisfaction and loyalty.",
        para5:
          "Increased brand value: A strong brand identity can increase the perceived value of your products or services, leading to increased sales and revenue.",
        para6:
          "Overall, having a unique brand identity is crucial for building and maintaining a successful business in today's competitive marketplace.",
      },
      {
        para1:
          "Increased online visibility: By setting up a social media profile for your business, you can increase your online visibility and reach a wider audience. This can help you attract new customers and drive traffic to your website.",
        para2:
          "Improved customer engagement: Social media is a great platform for interacting with your customers and building a community around your brand. By regularly posting updates, responding to comments and messages, and sharing relevant content, you can create a more personal and engaging relationship with your audience.",
        para3:
          "Enhanced brand credibility: A well-designed and regularly updated social media profile can help establish your business as a credible and trustworthy brand. This can be especially important for small businesses or startups looking to establish their brand in the market.",
        para4:
          "Increased sales and revenue: By effectively leveraging social media, you can drive more traffic to your website and ultimately increase sales and revenue. Social media can also be a powerful tool for promoting special offers and discounts, which can help boost sales.",
      },
      {
        para1:
          "1. Increased online visibility: By setting up a social media profile for your business, you can increase your online visibility and reach a wider audience. This can help you attract new customers and drive traffic to your website.",
        para2:
          "Improved customer engagement: Social media is a great platform for interacting with your customers and building a community around your brand. By regularly posting updates, responding to comments and messages, and sharing relevant content, you can create a more personal and engaging relationship with your audience.",
        para3:
          "Enhanced brand credibility: A well-designed and regularly updated social media profile can help establish your business as a credible and trustworthy brand. This can be especially important for small businesses or startups looking to establish their brand in the market.",
        para4:
          "Increased sales and revenue: By effectively leveraging social media, you can drive more traffic to your website and ultimately increase sales and revenue. Social media can also be a powerful tool for promoting special offers and discounts, which can help boost sales.",
      },
    ],
    serviceChecklist: [
      {
        item1: "Simple Market analysis",
        item2: "Simple Financial analysis",
        item3: "Simple Technical analysis",
        item4: "Simple Legal analysis",
        item5: "Simple Management and organizational analysis",
        item6: "Simple Operational analysis",
      },
      {
        item1: "Logo (color, black, white)",
        item2: "Letterhead",
        item3: "Business card",
        item4: "Envelope",
        item5: "Signboard",
        item6: "Packaging(Any 1 item)",
        item7: "Leaflet",
        item8: "Brochure",
        item9: "Catalog",
        item10: "Promotional items(Any 1 item)",
      },
      {
        item1: "Platform selection",
        item2: "Account setup",
        item3: "Initial content",
      },
      {
        item1: "Customer Journey Mapping",
        item2: "Awareness Campaign",
        item3: "Social Media Ads",
        item4: "Search Engine Ads",
      },
    ],
    deliverables: [
      {
        item1: "A feasibility report",
      },
      {
        item1: "Mockup JPG file",
        item2: "Printable Document files (PDF)",
        item3: "Raw Vector file/s (AI)",
      },
      {
        item1: "Account credentials",
        item2: "Report for website selction",
      },
      {
        item1: "Customer journey roadmap",
        item2: "Engagement report",
      },
    ],
    timeframe: [
      { item1: "3-4 weeks" },
      { item1: "1-2 weeks" },
      { item1: "1 week" },
      { item1: "4 weeks" },
    ],
    price: [
      "Starting from $320",
      "Starting from $200",
      "Starting from $150",
      "Starting from $300",
    ],
    customer: [
      { level: "High", meeting: "Upto 2 meetings per week" },
      { level: "High", meeting: "Upto 2 meetings per week" },
      { level: "Low", meeting: "1 meeting" },
      { level: "Low", meeting: "1 meeting" },
    ],
    idealFor: [
      "Entrepreneur or someone with a new idea looking for more information on the topic.",
      "A person willing to set up their brand identity.",
      "A person willing to set up their business presence on the internet.",
      "A person willing to set up their business presence on the internet.",
    ],
    endLine: [
      "Our services are designed to help you make the most informed decision when launching a new business. Contact us today to learn more about our feasibility and market analysis services.",
      "We believe that great design should be accessible to all businesses, regardless of size. So why not get in touch",
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
