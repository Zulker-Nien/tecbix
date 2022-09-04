import logo from "../Media/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt={""}></img>
      </div>
      <ul className="menu">
        <li className="menuItem">
          <h6>ABOUT US</h6>
        </li>
        <li className="menuItem">
          <h6>SERVICES</h6>
        </li>
        <li className="menuItem">
          <h6>CAREER</h6>
        </li>
        <li className="menuItem">
          <h6>CONTACT</h6>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
