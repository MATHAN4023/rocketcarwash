import React, { useEffect, useRef } from 'react';
import CarwashCard from '../ScrollComponent/CarwashCard/CarwashCard';
import InternalCleaningCard from '../ScrollComponent/InternalCleaningCard/InternalCleaningCard';
import RubbingWaxing from '../ScrollComponent/RubbingWaxing/RubbingWaxing';
import CoatingTreatment from '../ScrollComponent/CoatingTreatment/CoatingTreatment';
import CarPaintPro from '../ScrollComponent/CarPaintPro/CarPaintPro';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HorizontalScroll.css';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Function to create the horizontal scroll animation (for larger screens)
    const createHorizontalScroll = () => {
      return gsap.to(container, {
        x: -(container.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${container.scrollWidth}`,
          pin: true,
          scrub: true,
        },
      });
    };

    // Initialize the animation for horizontal scroll
    const scrollTween = createHorizontalScroll();

    // Resize event listener to reinitialize ScrollTrigger on window resize
    const resizeHandler = () => {
      setTimeout(() => {
        scrollTween.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        createHorizontalScroll(); // Recreate horizontal scroll animation
        ScrollTrigger.refresh();
      }, 100);
    };

    // Attach resize event listener
    window.addEventListener('resize', resizeHandler);

    // Initial refresh for ScrollTrigger
    ScrollTrigger.refresh();

    return () => {
      // Cleanup on component unmount to avoid memory leaks
      scrollTween.kill();
      window.removeEventListener('resize', resizeHandler);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="hcontent">
      <div className="flex-shrink-0 card-item">
        <CarwashCard />
      </div>
      <div className="flex-shrink-0 card-item">
        <InternalCleaningCard />
      </div>
      <div className="flex-shrink-0 card-item">
        <RubbingWaxing />
      </div>
      <div className="flex-shrink-0 card-item">
        <CoatingTreatment />
      </div>
      <div className="flex-shrink-0 card-item">
        <CarPaintPro />
      </div>
    </div>
  );
};

export default HorizontalScroll;
