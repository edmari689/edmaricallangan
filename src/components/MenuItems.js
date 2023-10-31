import { useState, useEffect, useRef } from "react";
import Dropdown from './Dropdown';
import { Link } from "react-router-dom";

const MenuItems = ({ items, depthLevel }) => {

  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
     if (dropdown && ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);
  
  const onMouseEnter = () => {
    window.innerWidth > 768 && setDropdown(true);
   };
  const onMouseLeave = () => {
    window.innerWidth > 768 && setDropdown(false);
   };
  const closeDropdown = () => {
    dropdown && setDropdown(false);
   }
   //
   const toggleHeaderNavClass = () => {
    const headerNavElement = document.querySelector("header nav");

    if (headerNavElement) {
      headerNavElement.classList.toggle("responsive_nav");
    }
  };
  /* 
  This function has additional effect: after clicking each link, the 
  bar button doesn't toggle up until the second press happens to toggle
  the menu.
  */

  return (
    <li 
    className="menu-items" 
    ref={ref}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={closeDropdown}
    >
      {items.submenu && items.url ? (
        <>
          <button 
          type="button" 
          aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 768 && depthLevel === 0 ? (
             items.title
             ) : (
              <Link to={items.url} onClick={toggleHeaderNavClass}>{items.title}</Link>
            )}
            {depthLevel > 0 &&
            window.innerWidth < 768 ? null : depthLevel > 0 &&
              window.innerWidth > 768 ? (
            <span>&raquo;</span> 
            ) : (
            <span className="arrow" />
          )}        
          </button>
          <Dropdown 
            depthLevel={depthLevel}
            submenus={items.submenu} 
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
          type="button" 
          aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{' '}
            {depthLevel > 0 ? (
            <span>&raquo;</span> 
            ) : (
            <span className="arrow" />
          )}
          </button>
          <Dropdown 
            depthLevel={depthLevel}
            submenus={items.submenu} 
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url} onClick={toggleHeaderNavClass}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;