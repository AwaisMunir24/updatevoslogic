import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { Voslogicimages } from "../../../feature/Voslogicimages";
const Navbar = ({ hanldeToggle }) => {
  return (
    <div className="menutoggle--">
      <div className="nav--bar">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6  col-6">
              <div className="header--logo">
                <Link to="/">
                  <img src={Voslogicimages.logo} alt="vologic" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="header--nav--icon">
                <img
                  src={Voslogicimages.navligo}
                  alt="icon"
                  onClick={hanldeToggle}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-sm-12">
              <div className="header--button">
                <a href="contact-us" target="_blank" rel="noopener noreferrer">
                  get started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav--bar---overlay">
          <ul>
            <li>
              <NavLink to="/" onClick={hanldeToggle}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="Compareus" onClick={hanldeToggle}>
                Compare us
              </NavLink>
            </li>
            <li>
              <NavLink to="Whatwedo" onClick={hanldeToggle}>
                What we do
              </NavLink>
            </li>
            <li>
              <NavLink to="contact-us" onClick={hanldeToggle}>
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
