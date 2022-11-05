import "./Footer.scss";
import { SiUpwork } from "react-icons/si";
import { CgFacebook } from "react-icons/cg";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="footer">
      <h6>+8801717755244</h6>
      <ul>
        <li>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.facebook.com/tecbix"
            target="_blank"
            rel="noreferrer"
          >
            <CgFacebook />
          </a>
        </li>
        <li>
          <GrInstagram />
        </li>
        <li>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/company/tecbix/ "
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <SiUpwork />
        </li>
        <li>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.youtube.com/channel/UCFA_24jHJsAqZGs0SncMrJQ "
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
        </li>
      </ul>
      <div className="copyright">
        <h6>© Copyright Tecbix 2022</h6>
      </div>
    </div>
  );
}

export default Navbar;
