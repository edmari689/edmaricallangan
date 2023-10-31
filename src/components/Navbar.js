import { pageItems } from "../PageItems";
import MenuItems from "./MenuItems";

import { FaBars, FaTimes} from "react-icons/fa";
import { useRef, useState } from "react";

const Navbar = () => {
    const navRef = useRef();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
      <> 
      <nav id="linkNav" ref={navRef} className={isMobileMenuOpen ? "responsive_nav" : ""}>
        <ul className="menus"> 
        {pageItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
        })}
        </ul>
        <button className="nav-btn nav-close-btn" onClick={toggleMobileMenu}>
            <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleMobileMenu}>
        <FaBars />
      </button>
      </>
    );
  };
  
  export default Navbar;

  /*
const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

  */