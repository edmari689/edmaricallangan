import { pageItems } from "../PageItems";
import MenuItems from "./MenuItems";

const DemoNavbar = () => {
    return (
    <nav>
        <ul className="menus">
        {pageItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
        })}
        </ul>
    </nav>
    );
  };
  
  export default DemoNavbar;