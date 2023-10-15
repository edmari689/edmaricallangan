import { pageItems } from "../PageItems";
import MenuItems from "./MenuItems";

import { FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
      <>
    <nav id="linkNav" ref={navRef}>
        <ul className="menus">
        {pageItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
        })}
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
        </button>
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
       <FaBars />
    </button>
    </>
    );
  };
  
  export default Navbar;