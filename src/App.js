import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact'
import About from './pages/About'

import Navbar from './Navbar';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;