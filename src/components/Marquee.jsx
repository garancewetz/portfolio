
import { Iframe, Figure } from '../components/atoms'

export default function Marquee ({duration, direction, slides = []}) {

  const contentSlide = (slide) => {
    return (
      <>
        <div className={`relative aspect-square flex justify-center items-center group`}>
            {slide.video ? (
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100  duration-200 rounded-full overflow-hidden flex items-center justify-center`} >
                <Iframe src={slide.src}></Iframe>
              </div>
            ) : (
              <div 
                className={`absolute inset-0 bg-cover opacity-0 group-hover:opacity-100 duration-200 rounded-full overflow-hidden`} 
              >
                <Figure
                  classNames="object-cover h-full w-full object-center"
                  webp={slide.srcWebp}
                  jpg={slide.srcJpg}
                  ></Figure>

              </div>
            )}
          <div 
            className='text-stroke md:text-xl xl:text-4xl xl:font-black xl:text-transparent break-normal text-center z-10 font-sans p-2'
            style={{
              mixBlendMode: 'multiply'
            }}>{slide.name}</div>
        </div>
    </>
    )
  }

  return (
      <div className="marquee font-arial">
        <div className="marquee-content" style={{ '--duration': duration }}> 
        {slides.map((slide, i) => (
          <div key={`original-${i}`} className="marquee-item w-[600px] pr-10">
            {contentSlide(slide)}
          </div>
        ))}
        {/* clone */}
        {slides.map((slide, i) => (
          <div key={`cloned-${i}`} className="marquee-item w-[600px] pr-10">
            {contentSlide(slide)}
          </div>
        ))}
        </div>
      </div>
  );
};

