import React, { useRef, useEffect, useState } from "react";
import { Figure } from '../atoms'

export default function Card ({item}) {
  const slideRef = useRef(null);
  const THRESHOLD = 5;

  const [clientWidth, setClientWidth] = useState(350)
  const [rotateY, setRotateY] = useState(0)
  const [rotateX, setRotateX] = useState(0)


  const handleHover = (e, card) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
    setClientWidth(clientWidth)
    var rect = currentTarget.getBoundingClientRect();
    const horizontal = (clientX - rect.left) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;

    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    setRotateX(rotateX)
    setRotateY(rotateY)
  }
   

  const resetStyles = (e) => {
    setRotateX(0)
    setRotateY(0)
    setClientWidth(e.currentTarget.clientWidth)
  }

  return (
    <div 
      className="card"
      ref={slideRef}
      onMouseMove={(e) => handleHover(e, slideRef)}
      onMouseLeave={(e) => resetStyles(e, slideRef)}
      style={{ transform: `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`}}>
        <div 
          className=" content bg-dark w-[300px] h-[375px] md:w-[350px] md:h-[425px] text-white border group border-white-opacity-1 duration-200 rounded overflow-hidden p-2 ml-6 xl:ml-10 flex flex-col">
          <div className="preview h-1/2 md:h-[60%] rounded overflow-hidden">
            <Figure 
              classNames="w-full h-full object-cover object-center"
              webp={item.srcWebp}
              jpg={item.srcJpg}
            ></Figure>
          </div>
          <div className="p-2 flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <div className="space-y-2">
                {item.skills.map((skill, i) => (
                  <div key={i} className={`label mr-2 bg-white-opacity-1 `}>{skill}</div>
                ))}
              </div>
            </div>
              {item.link && (
                <a href={item.link} target='_blank' className="text-sm text-right">
                  Voir le site
                </a>
  
              )}
          </div>
        </div>
    
    </div>
  )
}