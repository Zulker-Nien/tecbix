import "./Footer.scss";
// import { GrInstagram } from "react-icons/gr";
import {
  FaFacebook,
  FaTwitterSquare,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <h6>+880 188 879 9003</h6>
      <ul>
        <li>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.facebook.com/tecbixIToutsourcing/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.instagram.com/tecbixbd/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            style={{ textDecoration: "none" }}
            href="https://twitter.com/tecbixbd"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare />
          </a>
        </li>
        <li>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.pinterest.com/tecbixbd/"
            target="_blank"
            rel="noreferrer"
          >
            <FaPinterestP />
          </a>
        </li>
        <li>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.youtube.com/@tecbixbd"
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

export default Footer;
