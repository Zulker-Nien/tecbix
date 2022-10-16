import "./Footer.scss";
import { SiUpwork } from "react-icons/si";
import { CgFacebook } from "react-icons/cg";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

function Navbar() {
  return (
    <div className="footer">
      <h6>+8801717755244</h6>
      <ul>
        <li>
          <CgFacebook />
        </li>
        <li>
          <GrInstagram />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
        <li>
          <SiUpwork />
        </li>
      </ul>
      <div className="copyright">
        <h6>© Copyright Tecbix 2022</h6>
      </div>
    </div>
  );
}

export default Navbar;
