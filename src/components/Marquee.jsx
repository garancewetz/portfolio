
import Iframe from '../components/atoms/Iframe'

export default function Marquee ({duration, direction, slides = []}) {

  const contentSlide = (slide) => {

    return (
      <>
        <a href={slide.link} target="_blank" rel="noreferrer" 
          className={`relative aspect-square flex justify-center items-center group`} >
            {slide.video ? (
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100  duration-200 rounded-full overflow-hidden flex items-center justify-center`} >
                <Iframe src={slide.src}></Iframe>
              </div>
            ) : (
              <div 
                className={` ${slide.position ? slide.position : 'bg-center' } absolute inset-0 bg-cover opacity-0 group-hover:opacity-100 duration-200 rounded-full ${slide.color}`} 
                style={{backgroundImage: `url('${slide.src}')`}}
              ></div>
            )}
          <div 
            className='text-stroke md:text-xl xl:text-4xl xl:font-black xl:text-transparent break-all z-10 font-sans'
            style={{
              mixBlendMode: 'multiply'
            }}>{slide.name}</div>
        </a>
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

