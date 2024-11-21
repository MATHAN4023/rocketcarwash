import React from 'react';
import CarwashCard from '../ScrollComponent/CarwashCard/CarwashCard';
import InternalCleaningCard from '../ScrollComponent/InternalCleaningCard/InternalCleaningCard';
import RubbingWaxing from '../ScrollComponent/RubbingWaxing/RubbingWaxing';
import CoatingTreatment from '../ScrollComponent/CoatingTreatment/CoatingTreatment';
import CarPaintPro from '../ScrollComponent/CarPaintPro/CarPaintPro';
import './HorizontalScrollMob.css';

const HorizontalScrollMob = () => {
  return (
    <div className="horizontal-scroll-container">
      <div className="card-item">
        <CarwashCard />
      </div>
      <div className="card-item">
        <InternalCleaningCard />
      </div>
      <div className="card-item">
        <RubbingWaxing />
      </div>
      <div className="card-item">
        <CoatingTreatment />
      </div>
      <div className="card-item">
        <CarPaintPro />
      </div>
    </div>
  );
};

export default HorizontalScrollMob;  
