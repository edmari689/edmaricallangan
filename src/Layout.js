import { Outlet } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';

const Layout = () => {
  return (
    <div>
      <HeaderNav />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;