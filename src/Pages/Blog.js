import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import "./Home.scss";
import { Link } from "react-router-dom";
import sanityClient from "../Components/Client";

const Blog = () => {
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        // `*[_type == "blog"]{heading}`
        `*[_type == "blog"]{date,types[],heading,image{asset->{_id,url}},body}`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);
  return (
    <>
      {console.log(postData)}
      <div className="blogContainer">
        {postData &&
          postData.map((blog, index) => {
            return (
              <Link
                to="/blogItem"
                key={index}
                style={{ textDecoration: "none", height: "25vh" }}
              >
                <div className="blogCard">
                  <div className="image">
                    <img src={blog.image.asset.url} />
                  </div>
                  <div className="texts">
                    <h3>{blog.heading}</h3>
                    <h6>{blog.date}</h6>
                    <h6>{blog.types}</h6>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      <div className="footerBlogContainer">
        <Footer />
      </div>
    </>
  );
};

export default Blog;
