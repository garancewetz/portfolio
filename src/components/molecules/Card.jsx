import React, { useRef, useEffect, useState } from "react";
import { Figure } from '../atoms'

export default function Card ({item}) {
  const slideRef = useRef(null);

  const [clientWidth, setClientWidth] = useState(350)


  return (
    <div 
      className="card"
      ref={slideRef}
    >
        <div 
          className="content w-full aspect-[5/6] text-white border group border-white-opacity-1 duration-200 rounded overflow-hidden p-2 flex flex-col glassmorphism dark">
          <div className="preview h-1/2 md:h-[50%] rounded overflow-hidden">
            <Figure 
              classNames="w-full h-full object-cover object-center opacity-70 group-hover:opacity-100"
              webp={item.srcWebp}
              jpg={item.srcJpg}
            ></Figure>
          </div>
          <div className="px-2 py-4 flex flex-col justify-between flex-1">
            <div>
              <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
              <ul className="space-y-2">
                {item.skills.map((skill, i) => (
                  <li key={i} className={`label mr-2 bg-white-opacity-1 `}>{skill}</li>
                ))}
              </ul>
            </div>
            {item.link && (
              <div >
                <a href={item.link} target='_blank' className="link text-md">
                  Naviguer vers le site
                </a>
              </div>
            )}
          </div>
        </div>
    
    </div>
  )
}