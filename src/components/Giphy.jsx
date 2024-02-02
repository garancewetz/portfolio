import React, { useState, useEffect } from 'react';

export default function Giphy ({ card, color }) {
  const apiKey = '2izb5HQthxetaPkByYWsqyPlJmYNSNIW';
  const query = 'computer'

  const [isSmallClipPath, setIsSmallClipPath] = useState(false)

  const [randGifIdx, setRandGifIdx] = useState(0);
  const [giphy, setGiphy] = useState(null);
  const [gif, setGif] = useState(null);

  
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=20&offset=${Math.floor(Math.random() * 100)}`)
      .then((response) => response.json())
      .then((data) => {
        setGiphy(data.data)
      })
      .catch((error) => console.log(error));
  }, []);


  useEffect(() => {
      if (giphy && giphy.length > 0) {
        const randGifInterval = setInterval(() => {
          setRandGifIdx((prevIdx) => (prevIdx + 1 > 19 ? 0 : prevIdx + 1));
          setGif(giphy[randGifIdx].images.original.url);
        }, 3000);

        return () => clearInterval(randGifInterval);
      }
 }, [giphy, randGifIdx]);

  return (
    <div className="w-full h-full relative grid grid-cols-3">
      <div className='col-span-1 flex flex-col items-start justify-center pl-10'>
        {/* <div className='text-3xl uppercase glow mb-10'>Me contacter</div> */}
        <div className='space-y-4 flex flex-col items-start text-lg'>
          <div>Garance Wetzel</div>
          <a 
          onMouseEnter={() => setIsSmallClipPath(true)}
          onMouseLeave={() => setIsSmallClipPath(false)}
          href="https://www.linkedin.com/in/garancewetzel/" 
          target="_blank" 
          className='border-b-2 hover:border-0'>linkedin</a>
          <a 
          onMouseEnter={() => setIsSmallClipPath(true)}
          onMouseLeave={() => setIsSmallClipPath(false)}
          href="https://www.linkedin.com/in/garancewetzel/" 
          target="_blank" 
          className='border-b-2 hover:border-0'>Mail</a>
        </div>
      </div>
      <div 
        style={{ clipPath:`${isSmallClipPath ? 'inset(5% 5% 5% 0% round 25vw 0vw 0vw 25vw)' : 'inset(20% 10% 20% 10% round 25vw 25vw 25vw 25vw)'}` }}
      className='transition_8 relative h-full w-full overflow-hidden col-span-2'>

        <img
          src={gif}
          alt="Random Giphy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ display: gif ? 'block' : 'none' }}
        />
      </div>
    </div>
  );
};

