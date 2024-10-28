import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
// import Products from "./Components/Services/Products";
import Banner from './Components/Banner/Banner';

import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 700,
        easing: 'ease-in',
        delay: 100,
    });
  });
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <Home />
        <Services />
        <Banner /> 
        {/* <Products />  */}
        <Testimonial />
        <Footer />
        <Analytics />
    </div>
  )
}

export default App;
