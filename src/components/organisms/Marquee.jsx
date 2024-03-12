
import { Figure } from './../atoms'

export default function Marquee ({duration, slides = []}) {
  const contentSlide = (slide) => {
    return (
      <div className={`relative aspect-square flex justify-center items-center duration-800`}>
        <div 
          className='text-white break-normal text-center z-10  group pointer-auto'
        > 
          <span className='md:text-xl xl:text-2xl hover:opacity-0 px-4 py-2'>{slide.name}</span>
          <div 
            className={`absolute inset-0 bg-cover duration-700 rounded-full overflow-hidden group-hover:opacity-80 opacity-0 `} 
          >
            <Figure
              classNames="object-cover h-full w-full object-center"
              webp={slide.srcWebp}
              jpg={slide.srcJpg}
              ></Figure>
          </div>
        </div>
      </div>
    )
  }

  return (
      <div className="marquee overflow-hidden">
        <ul className="marquee-content" style={{ '--duration': duration }}> 
          {slides.map((slide, i) => (
            <li key={`original-${i}`} className="marquee-item w-[500px] pr-10">
              {contentSlide(slide)}
            </li>
          ))}
        {/* clone */}
        {slides.map((slide, i) => (
          <li key={`cloned-${i}`} className="marquee-item w-[500px] pr-10">
            {contentSlide(slide)}
          </li>
        ))}
        </ul>
      </div>
  );
};

