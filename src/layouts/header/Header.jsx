import "./Header.css";
import { Voslogicimages } from "../../feature/Voslogicimages";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";
const Header = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);

  const hanldeToggle = () => {
    setNavbarToggle(!navbarToggle);
  };

  return (
    <header>
      <div className="container-xxl">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-4 col-md-4 col-sm-4  col-6">
            <div className="header--logo">
              <Link to="/">
                <img src={Voslogicimages.logo} alt="vologic" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-6">
            <div className="header--nav--icon">
              <img
                src={Voslogicimages.burguricon}
                alt="icon"
                onClick={hanldeToggle}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-sm-12">
            <div className="header--button">
              <Link to="contact-us">get started</Link>
            </div>
          </div>
        </div>
      </div>
      {navbarToggle && <Navbar hanldeToggle={hanldeToggle} />}
    </header>
  );
};

export default Header;
