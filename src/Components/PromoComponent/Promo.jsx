import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Promo.css";
import mp1 from "../../Assets/Videos/1.mp4";
import mp2 from "../../Assets/Videos/2.mp4";
import mp3 from "../../Assets/Videos/3.mp4";

gsap.registerPlugin(ScrollTrigger);

const Promo = () => {
  const promoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const promo = promoRef.current;
    const text = textRef.current;

    // Video resizing animation
    gsap.to(".promo__video", {
      height: "20vh",
      borderRadius: "25px",
      ease: "none",
      scrollTrigger: {
        trigger: promo,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Grid resizing animation for videos
    gsap.to(".promo__videos", {
      gridTemplateColumns: "15vw 15vw 15vw",
      height: "20vh",
      width: "50vw",
      columnGap: "30px",
      ease: "none",
      scrollTrigger: {
        trigger: promo,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Promo text fade-in animation
    gsap.fromTo(
      text,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="promo" ref={promoRef}>
      {/* Videos Section */}
      <div className="promo__inner">
        <div className="promo__videos">
          <div className="promo__video-box">
            <video
              className="promo__video promo__video--left"
              src={mp1}
              muted
              loop
              playsInline
              autoPlay
              onClick={(e) => {
                if (e.target.requestFullscreen) {
                  e.target.requestFullscreen();
                } else if (e.target.webkitRequestFullscreen) { // Safari
                  e.target.webkitRequestFullscreen();
                } else if (e.target.msRequestFullscreen) { // IE11
                  e.target.msRequestFullscreen();
                }
                e.target.play(); // Ensure the video plays when fullscreen is activated
              }}
            ></video>
          </div>
          <div className="promo__video-box">
            <video
              className="promo__video promo__video--center"
              src={mp2}
              muted
              loop
              playsInline
              autoPlay
              onClick={(e) => {
                if (e.target.requestFullscreen) {
                  e.target.requestFullscreen();
                } else if (e.target.webkitRequestFullscreen) { // Safari
                  e.target.webkitRequestFullscreen();
                } else if (e.target.msRequestFullscreen) { // IE11
                  e.target.msRequestFullscreen();
                }
                e.target.play(); // Ensure the video plays when fullscreen is activated
              }}
            ></video>
          </div>
          <div className="promo__video-box">
            <video
              className="promo__video promo__video--right"
              src={mp3}
              muted
              loop
              playsInline
              autoPlay
              onClick={(e) => {
                if (e.target.requestFullscreen) {
                  e.target.requestFullscreen();
                } else if (e.target.webkitRequestFullscreen) { // Safari
                  e.target.webkitRequestFullscreen();
                } else if (e.target.msRequestFullscreen) { // IE11
                  e.target.msRequestFullscreen();
                }
                e.target.play(); // Ensure the video plays when fullscreen is activated
              }}
            ></video>
          </div>
        </div>
      </div>

      {/* Promo Text Section */}
      <div className="promo__text" ref={textRef}>
        <p>
          Rocket Car Wash delivers fast, innovative car care for a perfect shine
          every time. Experience top-quality service that brings out the best
          in your vehicle!
        </p>
      </div>
    </section>
  );
};

export default Promo;
