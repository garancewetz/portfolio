import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

import Circle from '../components/atoms/Circle'
import SvgText from '../components/atoms/SvgText'

export default function TextShapes ({text, colors = [], children}) {
  const contentTextShapes = useRef(null)
  
  const { contextSafe } = useGSAP({scope: contentTextShapes}); // we can pass in a config object as the 1st parameter to make scoping simple
  const [mouseX, setMouseX] = useState(1000)
  const [mouseY, setMouseY] = useState(1000)
  const [cursorSize, setCursorSize] = useState(10)

  const circles = [
    {
      size: 500,
      color: colors[0]
    },
    {
      size: 220,
      color: colors[1]
    },
    {
      size: 100,
      color: colors[2]
    }
  ]

  useGSAP(() => {   
    gsap.set(".cursor", {
      x: contentTextShapes.current.offsetWidth/4,
      y: contentTextShapes.current.offsetHeight/2
    })
    
    gsap.to(".shape", {
      x: contentTextShapes.current.offsetWidth/4,
      y: contentTextShapes.current.offsetHeight/2,
      stagger: -0.1
    }) 
   
  }, {scope: contentTextShapes})

  const setMousePos = contextSafe((e) => {
    setMouseX(e.clientX)
    setMouseY(e.clientY)

    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY
    })
    
    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1
    })
  });

  return (
    <div 
      ref={contentTextShapes} 
      className='relative w-full h-full  overflow-hidden text-white' 
      >
      <div className='absolute pointer-events-none md:text-md xl:text-lg xl:left-1/2 md:right-20 top-1/2 -translate-y-1/2 xl:-translate-x-1/2 z-10 md:max-w-md xl:max-w-xl'>{children}</div>
      <div 
        className={`cursor fixed aspect-square rounded-full z-30 ${colors[0]}`}
        style={{ 
          width: `${cursorSize}px`,
          margin: `-10px`
        }}
      ></div>
      <div className='shapes bg-white relative h-screen w-screen overflow-hidden border-8 border-dark'>
        {circles.map((el, i) => (
          <div key={i}>
            <Circle size={el.size} color={el.color}></Circle>
          </div>
        ))}
      </div>
      <div 
        onMouseMove={(e) => setMousePos(e)}
        className="absolute inset-0 h-screen w-screenoverflow-hidden">
          <SvgText text={text}></SvgText>
      </div>
    </div>
  )
}