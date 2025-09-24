import React, { useEffect, useRef } from "react";
import animalone from "/src/assets/baby-monkey-4888534.jpg";
import animaltwo from "/src/assets/dolphin-4509296.jpg";
import animalthree from "/src/assets/goose-3477674.jpg";
import animalfour from "/src/assets/squirrel-5791050.jpg";
import animalfive from "/src/assets/fly-8125379.jpg";
import Navbar from "../NavbarPage/Navbar";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { SplitText } from 'gsap/SplitText';

// Register SplitText plugin
gsap.registerPlugin(SplitText);

const animaImage = [
  { id: 1, image: animalone, alt: "baby monkey", heading: "Nature Work", me : "rol", work: "Front-end Dev", Year: " Year", number: "2025 ///..." },
  { id: 2, image: animaltwo, alt: "dolphin", heading: "Winged Tango" , me : "rol", work: "Front-end Dev" , Year: " Year", number: "2025///.." },
  { id: 3, image: animalthree, alt: "goose", heading: "Art Studio" , me : "rol", work: "Front-end Dev" , Year: " Year", number: "2025///..."  },
  { id: 4, image: animalfour, alt: "squirrel", heading: "CheerFully Nutty" , me : "rol", work: "Front-end Dev" , Year: " Year", number: "2025///..."},
  { id: 5, image: animalfive, alt: "Fly", heading: "Nova & Orion" , me : "rol", work: "Front-end Dev" , Year: " Year", number: "2025///..."},
];

const Hero = () => {
  const sliderRef = useRef(null);
  const slidesContainerRef = useRef(null);

  useEffect(() => {
    const slidesContainer = slidesContainerRef.current;
    const slides = gsap.utils.toArray(".heroSlide");
    
    if (!slidesContainer || slides.length === 0) return;

    // Calculate the total width needed for horizontal scrolling
    const totalWidth = slides.length * 100;

    // Set the width of the slides container
    gsap.set(slidesContainer, {
      width: `${totalWidth}vw`
    });

    // Create the horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top top",
        end: () => `+=${slidesContainer.scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / (slides.length - 1),
          duration: { min: 0.2, max: 0.5 },
          ease: "power1.inOut"
        },
        invalidateOnRefresh: true
      }
    });

    tl.to(slidesContainer, {
      x: () => `-${slidesContainer.scrollWidth - window.innerWidth}px`,
      ease: "none"
    });

    // text spilt
    let split = SplitText.create(".split", { type: "words, chars" });
    gsap.from(split.chars, {
      duration: 1, 
      y: 100,         // animate from 100px below
      autoAlpha: 0,   
      stagger: 0.05,  // 0.05 seconds between each
      ease: "elastic"
    });
    

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar className="fixed top-0 left-0 w-full z-50" />

      {/* Slider container - acts as viewport */}
      <div ref={sliderRef} className="overflow-hidden w-full h-screen">
        {/* Slides track - moves horizontally */}
        <div ref={slidesContainerRef} className="flex h-full relative">
          {animaImage.map((img) => (
            <div
              key={img.id}
              className="heroSlide w-screen h-screen flex-shrink-0 relative"
            >
              <img
                src={img.image}
                alt={img.alt}
                className="w-full h-full object-cover brightness-75"
              />
              <h1 className="split absolute bottom-36 left-16 text-7xl font-medium text-white drop-shadow-lg">
                {img.heading}
              </h1>

              <div className="flex flex-row">
              <h6 className="split absolute bottom-4 right-5 text font-light text-white text-center drop-shadow-lg">
                {img.me} <br/> <span> {img.work}</span>
              </h6>

              <h6 className="split absolute bottom-4 left-4 text font-light text-black text-center drop-shadow-lg">
                {img.Year} <br/> <span> {img.number}</span>
              </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;