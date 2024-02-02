import {  useRef, Children } from 'react'

import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll({children}) {
  const horizontalWrapper = useRef()

    useGSAP(() => {
      gsap.to(horizontalWrapper.current, 
      {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: horizontalWrapper.current,
            start: "top top",
            end: () => "+=" + horizontalWrapper.current.offsetWidth,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            anticipatePin: 1
  
          }
        }
    );
  }, { scope: horizontalWrapper });

  return (
    <div 
      ref={horizontalWrapper} 
      className="relative h-screen w-[200vw]">
      <section className='flex'>
        {Children.map(children, child =>
          <div className="panel h-screen w-1/2">
            {child}
          </div>
        )}
      </section>
    </div>
  )
}