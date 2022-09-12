import React from "react";
import "./loader.scss";
import T from "../Media/T.png";
import E from "../Media/E.png";
import C from "../Media/C.png";
import B from "../Media/B.png";
import I from "../Media/I.png";
import X from "../Media/X.png";

import { Tween } from "react-gsap";

const loader = () => {
  return (
    <div className="loaderContainer">
      <Tween
        from={{ y: "-200px" }}
        to={{ y: "0px" }}
        stagger={0.03}
        duration={3}
        ease="elastic.out(0.2, 0.1)"
      >
        <img src={T} alt={""}></img>
        <img src={E} alt={""}></img>
        <img src={C} alt={""}></img>
        <img src={B} alt={""}></img>
        <img src={I} alt={""}></img>
        <img src={X} alt={""}></img>
      </Tween>
    </div>
  );
};

export default loader;
