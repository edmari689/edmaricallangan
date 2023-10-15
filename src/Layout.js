import { Outlet } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';

const Layout = () => {
  return (
    <>
      <HeaderNav />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;