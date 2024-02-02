import { useState, useRef } from 'react'

import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



export default function PinMeetElement({}) {
  const content = useRef()
  const pianoRef = useRef()
  const booksRef = useRef()
  const snowGlobeRef = useRef()
  const cheeseRef = useRef()
  const sarahRef = useRef()
  const musicRef = useRef()
  const cinemaRef = useRef()
  const canigouRef = useRef()
  // const { contextSafe } = useGSAP({scope: content});

  const imagesSmallCircle = [
  ]
  
  const imagesBigCircle = [
     {
       image: piano,
       ref: pianoRef,
       alt: "Piano"
     },
     {
       image: music,
       ref: musicRef,
       alt: 'Musique'
     },
     {
       image: sarahBernhardt,
       ref: sarahRef, 
       alt: 'Sarah Bernhardt',
     },
     {
       image: canigou,
       ref: canigouRef, 
       alt: 'Sarah Bernhardt',
     },
    {
      image: book,
      ref: booksRef,
      alt: 'Livres'
    },
    {
      image: snowGlobe,
      ref: snowGlobeRef,
      alt: 'Boule à neige'
    },
    {
      image: 'cheese',
      ref: cheeseRef,
      alt: 'Fromage'
    },
    {
      image: cinema,
      ref: cinemaRef,
      alt: 'Cinéma'
    },
   ]

   const [circSmallCircle, setCircSmallCircle] = useState(450)
   const [circBigCircle, setCircBigCircle] = useState(600)


  // useGSAP(() => {    
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: content.current,
  //       pin: content.current, // pin the trigger element while active
  //       start: "top top", // when the top of the trigger hits the top of the viewport
  //       end: "+=500", // end after scrolling 500px beyond the start
  //       scrub: 1,
  //       markers: true,
  //       ease: "power2",
  //       snap: {
  //         snapTo: "labels", // snap to the closest label in the timeline
  //         duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
  //         delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
  //         ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
  //       },
  //     }
  //   })
  //   tl.from([booksRef.current, pianoRef.current, sarahRef.current, musicRef.current, snowGlobeRef.current, cheeseRef.current, cinemaRef.current, canigouRef.current], 
  //     {
  //     x: innerWidth * 1,
  //     });
  // }, { scope: content })

  let imgCss = `absolute w-[80px] aspect-square rounded-full left-[calc(50%-40px)] top-[calc(50%-40px)]`
  
  const calcPos = (i, array) => {
    let part = 360/array.length
    return part*i
  }

  return (
    <div ref={content} className="relative h-full w-full flex justify-center items-center">
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <img src={sticker_garance2} width="200" alt="Photo de Garance"/>
      </div>


      <div className={`circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[${circSmallCircle}px] h-[${circSmallCircle}px]`}>
        <div className='relative h-full w-full '>
          {imagesSmallCircle.map((el, i) => (
              <div 
                key={`element-${i}`}
                className={`${imgCss} flex justify-center items-center`}
                style={{
                  transform: `rotate(${calcPos(i, imagesSmallCircle)}deg) translateX(${circSmallCircle/2}px)`
                }}>
                <img 
                  ref={el.ref}
                  src={el.image} 
                  alt={el.alt} 
                  width="80"
                  style={
                    { transform: `rotate(-${calcPos(i, imagesSmallCircle)}deg)`}
                  } 
                  />
              </div>
          ))}
        </div>
      </div>


      {/* <div 
        className={`big-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[${circBigCircle}px] h-[${circBigCircle}px]`}>
        <div className='relative h-full w-full'>
          {imagesBigCircle.map((el, i) => (
              <div 
                key={`element-${i}`}
                className={`${imgCss} flex justify-center items-center`}
                style={{
                  transform: `rotate(${calcPos(i, imagesBigCircle)}deg) translateX(${circBigCircle/2}px)`
                }}>
                <img 
                  ref={el.ref}
                  src={el.image} 
                  alt={el.alt} 
                  width="80"
                  style={
                    { transform: `rotate(-${calcPos(i, imagesBigCircle)}deg)`}
                  } 
                  />
              </div>
          ))}
        </div>
      </div> */}

    </div>
  )
}