import { useState, useEffect } from 'react'

import vinyl from '../assets/video/vinyl.mp4'

export default function Home() {
  const [isSmallClipPath, setIsSmallClipPath] = useState(false)

  const arrayNames = [
    ['G', 'a', 'r', 'a', 'n', 'c', 'e'],
    ['A', 'n', 'c', 'r', 'a', 'g', 'e'],
    ['C', 'a', 'r', 'n', 'a', 'g', 'e'],
  ]
  const [namesLetters, setNamesletters] = useState(arrayNames[0])

  const changeClipPath = (bool) => {
    setIsSmallClipPath(bool ? true : false)
  }

  useEffect(() => {
      const changeLettersInterval = setInterval(() => {
        const index = arrayNames.findIndex(item => arraysEqual(item, namesLetters));
        let currentName = namesLetters
        let nextName = index === arrayNames.length - 1 ?  arrayNames[0] : arrayNames[index+1]

        namesLetters.map((el, i) => {
            setTimeout(() => {
              currentName[i] = nextName[i];
              setNamesletters([...currentName]);
            }, i * 100);
        });

      }, 4000);

      return () => clearInterval(changeLettersInterval);
    
}, []);

  const arraysEqual = (arr1, arr2) => {
    return arr1.every((value, index) => value === arr2[index]);
  }

  return (
    <div className="h-full w-full relative bg-cover flex">
      <div className="z-10 text-white p-8">
        <div className="text-5xl flex ">
          {/* <button className="w-auto">
            {namesLetters.map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
          </button> */}
          <h1>Garance&nbsp;Wetzel</h1>
        </div>
        <h2 className="text-xl mt-2">Développeuse front</h2>
        <div className="mt-6">
          <button 
           onMouseEnter={() => changeClipPath(true)}
           onMouseLeave={() => changeClipPath(false)}
           className="w-auto">
            <span className="text-lg link">Visiter</span>
          </button>
        </div>

      </div>
      <div 
        className="transition_8 absolute inset-0"
        style={{ clipPath:`${isSmallClipPath ? 'circle(20% at 80% 50%)' : 'circle(45% at 25% 30%)'}` }}
        >
          <div className="w-full h-full relative">
            <video autoPlay loop muted className='w-full h-full object-cover'>
              <source src={vinyl} type="video/mp4"></source>
              Votre navigateur ne prend pas en charge la balise vidéo.
            </video>
            <div className="text-white absolute font-semibold left-[80%] top-1/2 -translate-y-1/2 -translate-x-1/2 text-xl">Scroller pour entrer ↦</div>
          </div>
      </div>
    </div>
  )
}