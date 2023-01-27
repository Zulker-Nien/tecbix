import "./Footer.scss";
// import { GrInstagram } from "react-icons/gr";
import {
  FaFacebookF,
  FaTwitterSquare,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

function Navbar() {
  return (
    <div className="footer">
      <h6>+880 188 879 9003</h6>
      <ul>
        <li>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.facebook.com/tecbix"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/company/tecbix/ "
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare />
          </a>
        </li>
        <li>
          <FaPinterestP />
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
