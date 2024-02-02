import { useState, useEffect, useRef } from 'react'

import './App.css'
import useIsInViewport from './hooks/useIsInViewport'
import Sarah from './assets/interests/sarah-bernhardt.jpg';
import Marina from './assets/interests/Marina-Ginesta.webp'
import Cinema from './assets/interests/cinema.jpg'
import top from './assets/interests/top.jpg'
import piano from './assets/interests/piano.jpg'
import ramen from './assets/interests/ramen.png'
import eus from './assets/interests/eus.jpg'
import sapienza from './assets/interests/sapienza.jpg'

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
  Plan,
  PaintBoard,
  TextShapes
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

  
  const slide1 = [
    
    {
      name: 'Cinéma',
      src: Cinema,
      color: 'bg-red'
    },
    {
      name: 'Lecture',
      src: sapienza,
      position: 'bg-top',
      color: 'bg-green'
    },
    {
      name: 'Musique',
      src: 'aqugL6GVYE8',
      video: true,
      color: 'bg-purple',
    },
    {
      name: 'Sarah Bernhardt',
      src: Sarah,
      color: 'bg-blue',
    },
    {
      name: 'Eus',
      src: eus,
      color: 'bg-red',
    },
  ]
  const slide2 = [
    {
      name: 'Ramen',
      src: ramen,
      color: 'bg-blue',
    },
    {
      name: 'Piano',
      src: piano,
      color: 'bg-yellow'
    },
    {
      name: 'Toupies',
      src: top,
      color: 'bg-pink',
    },
   
    {
      name: "Chorale",
      src: '',
      color: 'bg-yellow',
    },
 
    {
      name: "Guerre d'espagne",
      src: Marina,
      color: 'bg-blue',
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

      {/* home */}
      <HorizontalScroll>
        <div ref={homeRef} className='h-full'>
          <Home></Home>
        </div>
        <TextShapes 
          colors={['bg-red', 'bg-pink', 'bg-purple']}
          text="Hello world"
        >
            Je m'intéresse au design, à l'expérience utilisateur. 
            J'aime l'idée qu'un site soit aussi une expérience d'exploration.
            <br></br>
            <br></br>
            J'aime la musique, le cinéma, la lecture, les puzzles et les casses-têtes.
        </TextShapes>
      </HorizontalScroll>

      {/* bento */}
      <section ref={bentoRef} className='h-auto md:py-8 xl:py-20'>
        <BentoBox></BentoBox>
      </section>
      {/* pin */}
      <section ref={carouselRef} className='h-[650px] z-20 relative mt-28'>
        <CardCarousel/>
      </section>
      {/* marquee */}
      <section ref={marqueeRef} className="h-auto min-h-screen flex flex-col justify-center gap-20">
        <div className='text-white text-3xl text-center pl-10'>Intérêts</div>
        <Marquee duration="20s" direction="right" slides={slide1}></Marquee>
        <Marquee duration="30s" direction="left" slides={slide2}></Marquee>
      </section>
      
      {/* contact */}
      <div ref={contactRef} >
        <HorizontalScroll>
          <TextShapes 
            colors={['bg-yellow', 'bg-pink', 'bg-red']}
            text="Me contacter"
          >
            Me contacter
          </TextShapes>
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
