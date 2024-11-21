import React from 'react';
import Hero from '../HeroComponent/Hero';
import Promo from '../PromoComponent/Promo';
import HorizontalScroll from '../HorizontalComponent/HorizontalScroll';
import HorizontalScrollMob from '../HorizontalComponent/HorizontalScrollMob';
import './AllComponent.css'; // Import the CSS file

function AllComponent() {
  return (
    <>
      <Hero />
      <Promo />
      <div className="horizontal-scroll-container">
        <HorizontalScroll />
        <HorizontalScrollMob />
      </div>
    </>
  );
}

export default AllComponent;
