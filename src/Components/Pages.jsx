import React from 'react'
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Header from './Header';
import About from './About';
import Home from './Home';
import PortFolio from './PortFolio';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

const Pages = () => {
  return (
    <>
  
   
 
    <BrowserRouter>
    <Header/>
    <Routes>
   
      <Route exact path="/" element={<Home />}>  </Route>
      <Route exact path="/about" element={<About />}> </Route>
      <Route exact path="/portfolio" element={<PortFolio/>}> </Route>
      <Route exact path="/blog" element={<Blog/>}> </Route>
      <Route exact path="/contact" element={<Contact/>}> </Route>

    </Routes>
    <Footer/>
  </BrowserRouter>

  
    </>
  )
}

export default Pages