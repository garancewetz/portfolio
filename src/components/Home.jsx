import { useState, useRef } from 'react'
import t from '../assets/lang/fr.json'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { Particles } from './organisms'

export default function Home({handleChange}) {
  const [isSmallClipPath, setIsSmallClipPath] = useState(false)

  const HomeWrapper = useRef()
  const divClipPath = useRef()

//   useGSAP(() => {
//     gsap.to(HomeWrapper.current, 
//     {
//       ease: "none",
//       scrollTrigger: {
//         trigger: divClipPath.current,
//           start: "top top",
//            end: () => HomeWrapper.current.offsetWidth,
//           pin: true,
//           scrub: true,
//           invalidateOnRefresh: true,
//           anticipatePin: 1,
//           markers: false,
//           onUpdate:(self) => {
//             const progress = self.progress; // Obtenez la progression du défilement (0 à 1)        
//             console.log("🚀 ~ useGSAP ~ progress:", progress*100)
           
//             if (progress*100 > 20) {
//               gsap.set(divClipPath.current, {
//                 clipPath: `circle(60% at 80% 50%)`
//                 //clipPath: 'circle(110% at 20% 25%)'
//               });
//             } else {
//               gsap.set(divClipPath.current, {
//                 clipPath: 'circle(15% at 5% 20%)'
//               });
//             }
//           },
          
//         }
//       }
//   );
// }, { scope: HomeWrapper });

  return (
    <div 
    ref={HomeWrapper} 
    className="h-full w-full relative flex">  
     
      <div className='fixed w-full inset-0 z-10'>
          <Particles></Particles>
        </div>
    
      <div className="text-white p-6 md:pt-8 md:px-8 w-1/2 relative pointer-events-none">
        <div className='z-10 relative'>
          <div className="text-2xl md:text-4xl">
            <h1>{t.home.name}</h1>
          </div>
          <h2 className="text-md md:text-xl mt-2 md:mt-4">{t.home.job}</h2>
        </div>
    

        {/* <button className='mt-10 link pointer-events-auto z-10 relative' onClick={() => handleChange(true)}>Voir le plan du site</button> */}

        <h2 className="text-md space-x-4 flex items-center md:text-6xl absolute right-1/4 -translate-x-1/2 top-1/2 -translate-y-1/2">
          {/* &nbsp;Hello World ! &nbsp; */}
         &nbsp;➜</h2>
        {/* <div className='text-6xl mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. orem ipsum dolor sit, amet consectetur adipisicing elitorem ipsum dolor sit, amet consectetur adipisicing elitSoluta, veniam cum!</div> */}
        {/* <div 
        ref={divClipPath}
        className={`transition_8 absolute h-full w-full inset-0 ${isSmallClipPath ? 'clipPath-circle-sm' : 'clipPath-circle-lg' }`}
        >
          <div className="w-full h-full relative">
            <div className='h-full w-full min-h-full bg-purple opacity-10'></div>
            <div className="text-white absolute left-1/2 lg:left-[80%] top-[70%] lg:top-1/2 -translate-y-1/2 -translate-x-1/2 text-md md:text-lg">
              Bienvenue
            </div>
          </div>
      </div> */}
      
        {/* <div className='mt-6 flex text-xl absolute right-1/4 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 text-white'>Visiter <span className='rotate-90 block'>➜</span></div> */}
      </div>
      <div className='relative w-1/2 h-full text-white flex flex-col justify-center items-center pointer-events-none'>
        {/* <div className='absolute left-1/2 -translate-x-1/2 top-1/2 h-full -translate-y-1/2'>
          <Particles></Particles>
        </div> */}
        
        <span className='rotate-90 block text-md md:text-6xl'>➜</span>

      </div>
  
    </div>
  )
}