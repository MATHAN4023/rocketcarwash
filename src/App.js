import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Enter from './Components/EntryComponent/Enter';
import Hero from './Components/HeroComponent/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import Promo from './Components/PromoComponent/Promo';
import AllComponent from './Components/AllComponent/AllComponent';
import HorizontalScroll from './Components/HorizontalComponent/HorizontalScroll';
import HorizontalScrollMob from './Components/HorizontalComponent/HorizontalScrollMob';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/hero" element={<Hero />} /> 
        <Route path="/allcomponent" element={<AllComponent />} /> 
        <Route path="/promo" element={<Promo />} />
        <Route path="/horizontalScroll" element={<HorizontalScroll />} />
        <Route path="/horizontalScrollMob" element={<HorizontalScrollMob />} />
      </Routes>
    </Router>
  );
}

export default App;
