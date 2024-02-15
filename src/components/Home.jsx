import { useState, useRef, Profiler } from 'react'
import t from '../assets/lang/fr.json'
import { Particles } from '../components'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import vinylCompressed from '/video/vinylCompressed.mp4'

export default function Home() {
  const [isSmallClipPath, setIsSmallClipPath] = useState(false)

  const changeClipPath = (bool) => {
    setIsSmallClipPath(bool ? true : false)
  }

  const HomeWrapper = useRef()
  const divClipPath = useRef()

  useGSAP(() => {
    gsap.to(HomeWrapper.current, 
    {
      ease: "none",
      scrollTrigger: {
        trigger: divClipPath.current,
          start: "top top",
           end: () => "+=5000",
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          markers: false,
          onUpdate:(self) => {
            const progress = self.progress; // Obtenez la progression du défilement (0 à 1)        
            if (progress*100 > 5) {
              gsap.set(divClipPath.current, {
                clipPath: `circle(20% at 80% 50%)`
                //clipPath: 'circle(110% at 20% 25%)'
              });
            } else {
              gsap.set(divClipPath.current, {
                clipPath: 'circle(50% at 20% 25%)'
              });
            }
          },
          
        }
      }
  );
}, { scope: HomeWrapper });

  return (
    <div 
    ref={HomeWrapper} 
    className="h-full w-full relative bg-cover flex pointer-events-none">
      <div className=" text-white p-6 md:p-10">
        <div className="text-2xl md:text-4xl flex">
          <h1>{t.home.name}</h1>
        </div>
        <h2 className="text-md md:text-xl mt-2 md:mt-4">{t.home.job}</h2>
        {/* <div className="mt-6">
          <button 
           onMouseEnter={() => changeClipPath(true)}
           onMouseLeave={() => changeClipPath(false)}
           className="w-auto">
            <span className="text-md md:text-lg link">{t.home.visit}</span>
          </button>
        </div> */}

      </div>
      <div 
      ref={divClipPath}
        className={`transition_8 absolute inset-0 ${isSmallClipPath ? 'clipPath-circle-sm' : 'clipPath-circle-lg' }`}
        >
          <div className="w-full h-full relative">
            {/* <Particles></Particles> */}
            {/* <video 
              autoPlay 
              loop 
              muted 
              poster=""
              loading="lazy"
              fetchpriority="high" 
              className='h-full w-full object-cover object-left-bottom xl:object-center'>
              <source src={vinylCompressed} type="video/mp4"></source>
              {t.helpers.video}
            </video> */}
            <div className="text-white absolute font-semibold left-1/2 lg:left-[80%] top-[70%] lg:top-1/2 -translate-y-1/2 -translate-x-1/2 text-md md:text-lg">{t.home.hello}</div>
          </div>
      </div>
    </div>
  )
}