import DemoNavbar from "./Navbar";
import { Link } from "react-router-dom";
import IMAGES from "../images/PicIndex";

const HeaderNav = () => {
    return (
      <header>
        <div className="nav-area">
          <Link to="/" className="logo">
            <picture>
                <img className="icon-logo"
                src={IMAGES.homeLogo} // alternative 1st way
                alt="Home Logo" />
            </picture>
          </Link>
          <DemoNavbar />
        </div>
      </header>
    );
  };
  
  export default HeaderNav; 