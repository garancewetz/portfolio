export default function Footer ({children}) {
  return ( 
    <div className="h-full relative p-20 flex justify-center items-center pointer-events-none">
      <div className="text-9xl select-none font-oleo gradient-text">Ciao Ciao !</div>
      <div className="pointer-events-auto">{children}</div>
      <div className="text-sm absolute bottom-0 left-0 text-white p-4">
        <div>Vite x React x Gsap x Tailwind</div>
        <div>UI/UX Garance Wetzel</div>
      </div>
    </div>
  )
}