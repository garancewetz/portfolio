export default function Footer ({children}) {
  return ( 
    <div className="h-full relative p-6 md:p-20 flex justify-center items-center pointer-events-none">
      <div className="text-5xl md:text-9xl select-none font-oleo !leading-loose gradient-text">Goodbye world</div>
      <div className="pointer-events-auto md:block hidden">{children}</div>
      <div className="text-sm absolute bottom-0 left-0 text-white p-4">
        <div>Vite x React x Gsap x SCSS x Tailwind</div>
        <div>UI/UX Garance Wetzel</div>
      </div>
    </div>
  )
}