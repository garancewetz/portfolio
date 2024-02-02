export default function TextBackground ({
  arrow = '↧',
  children,
}) {
  


  let textShadow = 'rgb(255 255 255 / 10%) 0px 0px 5px'
  return (
      <div 
        className="relative w-screen h-screen max-w-4xl mx-auto">
        <div
          className={`gradient-text break-words font-black h-full flex items-center justify-between`}>
            <h3 className='max-w-3xl text-6xl' style={{ textShadow: textShadow }}>{children}</h3>
            <span className='text-9xl' style={{ textShadow: textShadow }}>{arrow}</span>
        </div>
      
      </div>
    
  )
}