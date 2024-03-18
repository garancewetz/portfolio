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
  Giphy,
  Home, 
  Plan,
} from './components/'

import { BentoBox, CardMosaic, Marquee, PaintBoard } from './components/organisms'
import { HorizontalScroll, Footer, Navigation, Panel } from './components/layouts'


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
      <header>
        <Navigation handleChange={handleChangePanel}></Navigation>
        <Panel 
          isPanelOpen={isPanelOpen}
          handleChange={handleChangePanel}
          rooms={rooms}
          currentRoom={currentRoomVisible}
        >
          <Plan 
            isPanelOpen={isPanelOpen}
            rooms={rooms}
            goToRoom={goToRoom}
            currentRoom={currentRoomVisible}></Plan> 
        </Panel>
      </header>
      <main>
        {/* home */}
        <HorizontalScroll>
          <section ref={homeRef} className='h-full w-full'>
            <Home rooms={rooms}
            currentRoomVisible={currentRoomVisible}
            handleChange={handleChangePanel}>
            </Home>
          </section>
        </HorizontalScroll>
          <section ref={bentoRef} className='z-[30] h-auto my-10 md:pt-6'>
            <BentoBox></BentoBox>
          </section>


        {/* mosaic */}
        <section 
          ref={carouselRef} 
          className='z-20 h-auto relative my-20 md:my-56'>
            <h3 className={`text-3xl text-white text-center mb-20 md:mb-52`}>Projets</h3>
          <CardMosaic/>
        </section>
        {/* marquee */}
        <section 
          ref={marqueeRef} 
          className="h-auto my-20 md:my-56 flex flex-col justify-center gap-40">
          <h3 className='text-white text-xl md:text-3xl text-center pl-10 glow'>Intérêts</h3>
          <Marquee duration="35s" direction="right" slides={slide1}></Marquee>
          <Marquee duration="45s" direction="left" slides={slide2}></Marquee>
        </section>
        
        {/* contact */}
        <section ref={contactRef} >
          <HorizontalScroll>
          <section className='text-white flex justify-center text-4xl items-center h-full'>
            ➜
          </section>
            <div
            className="h-full text-white">
              <Giphy></Giphy>
            </div> 
          </HorizontalScroll>
        </section>


      </main>
      {/* footer */}
      <footer ref={footerRef} className="h-screen relative">
        <PaintBoard>
        </PaintBoard>
        <Footer>
          <Plan 
            rooms={rooms}
            goToRoom={goToRoom}
            currentRoom={currentRoomVisible}></Plan>
        </Footer>
      </footer>
    </>
  )
}


export default App
