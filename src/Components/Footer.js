import './Footer.css'
import {SiUpwork} from 'react-icons/si'
import {CgFacebook} from 'react-icons/cg'
import {GrInstagram} from 'react-icons/gr'
import {FaLinkedinIn} from 'react-icons/fa'

function Navbar() {
  return (
    <div className="footer">
      <div className="number" >
        <h6>+8801742603568</h6>
      </div>
      <ul className="socialMenu">
        <li className="social">
            <CgFacebook/>
        </li>
        <li className="social">
            <GrInstagram/>
        </li>
        <li className="social">
            <FaLinkedinIn/>
        </li>
        <li className="social">
            <SiUpwork/>
        </li>
      </ul>
      <div className="copyright" >
        <h6>Copyright Tecbix 2022</h6>
      </div>
    </div>
  );
}

export default Navbar;
