import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

import Circle from './atoms/Circle'
import Svg from './atoms/Svg'

export default function SvgBackground ({text, colors = [], children}) {
  const context = useRef(null)
  
  const { contextSafe } = useGSAP({scope: context}); // we can pass in a config object as the 1st parameter to make scoping simple
  const [mouseX, setMouseX] = useState(1000)
  const [mouseY, setMouseY] = useState(1000)
  const [cursorSize, setCursorSize] = useState(10)

  const circles = [
    {
      size: 1000,
      color: colors[0]
    },
    {
      size: 700,
      color: colors[1]
    },
    {
      size: 500,
      color: colors[2]
    }
  ]

  useGSAP(() => {   
    // gsap.set(".cursor", {
    //   x: context.current.offsetWidth/2,
    //   y: context.current.offsetHeight/2
    // })
    
    gsap.to(".shape", {
      x: context.current.offsetWidth/2,
      y: context.current.offsetHeight/2,
      stagger: -0.1
    }) 
   
  }, {scope: context})

  const setMousePos = contextSafe((e) => {
    setMouseX(e.clientX)
    setMouseY(e.clientY)

    // gsap.set(".cursor", {
    //   x: mouseX,
    //   y: mouseY
    // })
    
    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1
    })
  });

  return (
    <section 
      ref={context} 
      className='relative w-full h-full overflow-hidden text-white' 
      onMouseMove={(e) => setMousePos(e)}
      style={{clipPath: `inset(5% 10% 5% 10% round 25vw 25vw 25vw 25vw)`}}
      >
        <div className='w-full h-full absolute z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center'>
          {children}
        </div>
      {/* <div 
        className={`cursor fixed aspect-square rounded-full z-30 ${colors[0]} hidden xl:block`}
        style={{ 
          width: `${cursorSize}px`,
          margin: `-10px`
        }}
      ></div> */}
      {/* <div className='shapes bg-dark relative h-screen w-screen overflow-hidden border-8 border-dark'>
        {circles.map((el, i) => (
          <div key={i}>
            <Circle size={el.size} color={el.color}></Circle>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 h-screen w-screen ">
          <Svg text={text}></Svg>
      </div> */}
    </section>
  )
}