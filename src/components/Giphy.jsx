import React, { useState, useEffect } from 'react';

export default function Giphy ({ card, color }) {
  console.log(import.meta.env.GIPHY_API_KEY)
  const apiKey = '2izb5HQthxetaPkByYWsqyPlJmYNSNIW';
  const query = 'computer'

  const [isSmallClipPath, setIsSmallClipPath] = useState(true)

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
    <div className="w-full h-full relative flex flex-col md:grid md:grid-cols-3">
      <div className='col-span-1 flex flex-col items-start justify-center md:pl-10'>
        {/* <div className='text-3xl uppercase glow mb-10'>Me contacter</div> */}
        <div className='space-y-4 flex flex-col items-start text-lg p-6 md:p-0'>
          <div>Garance Wetzel</div>
          <a 
          onMouseEnter={() => setIsSmallClipPath(false)}
          onMouseLeave={() => setIsSmallClipPath(true)}
          href="https://www.linkedin.com/in/garancewetzel/" 
          target="_blank" 
          className='link'>linkedin</a>
          {/* <a 
          onMouseEnter={() => setIsSmallClipPath(false)}
          onMouseLeave={() => setIsSmallClipPath(true)}
          href="https://www.linkedin.com/in/garancewetzel/" 
          target="_blank" 
          className='link'>Mail</a> */}
        </div>
      </div>
      <div 
        className={`transition_8 flex-1 relative md:h-full w-full overflow-hidden col-span-2 
        ${isSmallClipPath ? 'clipPath-pill-sm' : 'clipPath-pill-lg'}`}>
        <img
          src={gif}
          alt="Random Giphy computer"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ display: gif ? 'block' : 'none' }}
        />
      </div>
    </div>
  );
};

