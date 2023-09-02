import Layout from './Layout';

import HeaderPic from './components/HeaderPic';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Page404 from './pages/Page404';

import { Route, Routes } from "react-router-dom";
//from Switch to Routes ok

function App() {
  return (
    <>
      <HeaderPic />

      <div className='container'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </div>
    
      <Footer />
    </>
  );
}

export default App;

// Website Credit: 
// https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/