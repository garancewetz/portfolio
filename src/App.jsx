import { useState, useEffect, useRef } from 'react'
import './app.scss'
import useIsInViewport from './hooks/useIsInViewport'

import SarahJpg from '/images/interests/sarah-bernhardt.jpg'
import MarinaWebp from '/images/interests/Marina-Ginesta.webp'
import CinemaJpg from '/images/interests/cinema.jpg'
import pianoJpg from '/images/interests/piano.jpg'
import ramenJpg from '/images/interests/ramen.jpg'
import eusJpg from '/images/interests/eus.jpg'
import lanaWebp from '/images/interests/lana-del-rey.webp'
import angelaJpg from '/images/interests/angela-davis.jpg'
import choraleJpg from '/images/interests/chorale.jpg'
import svetlanaJpg from '/images/interests/svetlana.jpg'

import { 
  BentoBox,
  CardCarousel,
  Giphy,
  Home, 
  HorizontalScroll, 
  Footer, 
  Marquee, 
  Navigation, 
  Panel, 
  Particles,
  Plan,
  PaintBoard,
  SvgBackground
} from './components/'

function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [currentRoomVisible, setCurrentRoomVisible] = useState(0)

  const homeRef = useRef(null)
  const bentoRef = useRef(null)
  const marqueeRef = useRef(null)
  const carouselRef = useRef(null)
  const contactRef = useRef(null)
  const footerRef = useRef(null)

  const rooms = [
    { id: 'home', name: 'Accueil', ref: homeRef }, 
    { id: 'bento', name: 'CV', ref: bentoRef },
    { id: 'carousel', name: 'Projets', ref: carouselRef },
    { id: 'marquee', name: 'Intérêts', ref: marqueeRef },
    { id: 'contact', name: 'Contact', ref: contactRef },
    { id: 'footer', name: 'Ciao', ref: footerRef }
  ]

  const roomVisibilityCheckers = {
    [rooms[0].id]: useIsInViewport(rooms[0].ref),
    [rooms[1].id]: useIsInViewport(rooms[1].ref),
    [rooms[2].id]: useIsInViewport(rooms[2].ref),
    [rooms[3].id]: useIsInViewport(rooms[3].ref),
    [rooms[4].id]: useIsInViewport(rooms[4].ref),
    [rooms[5].id]: useIsInViewport(rooms[5].ref),
  };
  
  useEffect(() => {
    const keyWithValueTrue = Object.keys(roomVisibilityCheckers).find(key => roomVisibilityCheckers[key] === true);
    setCurrentRoomVisible(keyWithValueTrue);
  }, Object.values(roomVisibilityCheckers));

  // mette que des regards
  const slide1 = [
    {
      name: 'Cinéma',
      srcJpg: CinemaJpg,
    },
   
    {
      name: 'Musique',
      srcWebp: lanaWebp,
    },
    {
      name: 'Piano',
      srcJpg: pianoJpg,
      color: 'bg-yellow'
    },

 
    {
      name: "Guerre d'espagne",
      srcWebp: MarinaWebp,
    },
    {
      name: 'Eus',
      srcJpg: eusJpg,
      color: 'bg-red',
    },
    
  ]
  const slide2 = [
    {
      name: 'Ramen',
      srcJpg: ramenJpg,
      color: 'bg-blue',
    },
    {
      name: 'Lecture',
      srcJpg: svetlanaJpg,
    },
   
    {
      name: 'Sarah Bernhardt',
      srcJpg: SarahJpg,
    },
    {
      name: "Chorale",
      srcJpg: choraleJpg,
      color: 'bg-yellow',
    },
    {
      name: 'Luttes sociales',
      srcJpg: angelaJpg,
      color: 'bg-pink',
    },
  ]


  const handleChangePanel = (e) => {
    setIsPanelOpen(e)
  }

  const goToRoom = (room) => {
    let finded = rooms.find(el => el.id === room.id)
    finded.ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      {/* panel */}
      <Panel 
        isPanelOpen={isPanelOpen}
        handleChange={handleChangePanel}
        rooms={rooms}
        currentRoom={currentRoomVisible}
      >
        <Plan 
        rooms={rooms}
        goToRoom={goToRoom}
        currentRoom={currentRoomVisible}></Plan> 
      </Panel>
      <Navigation handleChange={handleChangePanel}></Navigation>
    <div className='fixed inset-0 h-full w-full z-[20]'> <Particles></Particles></div>
{/* <Particles></Particles> */}
      {/* home */}
      <HorizontalScroll>
        <div ref={homeRef} className='h-full pointer-events-none'>
          <Home></Home>
        </div>
        <SvgBackground 
          colors={['bg-red', 'bg-pink', 'bg-purple']}
        >
           <div className='text-sm xl:text-lg w-[15rem] md:w-full md:max-w-md xl:max-w-2xl p-6 md:p-8 rounded md:rounded-lg | glassmorphism dark'>
            Je m'intéresse au design, à l'expérience utilisateur. 
            J'aime l'idée qu'un site soit aussi une expérience d'exploration.
           </div>
        </SvgBackground>
      </HorizontalScroll>

      {/* bento */}
      <section ref={bentoRef} className='z-[30] h-auto my-10 md:py-8 xl:py-20'>
          <BentoBox></BentoBox>
      </section>
      {/* carousel */}
      <section ref={carouselRef} className='z-20 h-[425px] relative my-20 md:my-56'>
        <CardCarousel/>
      </section>
      {/* marquee */}
      <section ref={marqueeRef} className="h-auto my-20 md:my-56 flex flex-col justify-center gap-20">
        <div className='text-white text-xl md:text-3xl text-center pl-10'>Intérêts</div>
        <Marquee duration="20s" direction="right" slides={slide1}></Marquee>
        <Marquee duration="30s" direction="left" slides={slide2}></Marquee>
        {/* <Marquee duration="25s" direction="left" slides={slide3}></Marquee> */}

      </section>
      
      {/* contact */}
      <div ref={contactRef} >
        <HorizontalScroll>
          <SvgBackground 
            colors={['bg-yellow', 'bg-pink', 'bg-red']}
            text="Me contacter"
          >
            <div className='text-sm xl:text-lg w-[15rem] md:w-full md:max-w-md xl:max-w-2xl p-6 md:p-8 rounded md:rounded-lg | glassmorphism dark'>
              Me contacter
           </div>
          </SvgBackground>
          <div
          className="h-full text-white">
            <Giphy></Giphy>
          </div> 
        </HorizontalScroll>
      </div>

      {/* footer */}
      <section ref={footerRef} className="h-screen relative">
        <PaintBoard>
        </PaintBoard>
        <Footer>
          <Plan 
            rooms={rooms}
            goToRoom={goToRoom}
            currentRoom={currentRoomVisible}></Plan>
        </Footer>
      </section>
    </>
  )
}


export default App
