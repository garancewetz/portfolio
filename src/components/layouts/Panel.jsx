import { useState, useEffect, useRef } from "react"

export default function Panel ({
  handleChange, 
  isPanelOpen = false, 
  rooms = [],
  currentRoom = 'home', 
  children
}) {

  const [currRoomName, setCurrRoomName] = useState(currentRoom)
  const panelContentRef = useRef()

  useEffect(() => {
    let curr = rooms.find(el => el.id === currentRoom)
    if (curr) setCurrRoomName(rooms.find(el => el.id === currentRoom).name)
  }, [currentRoom])

  useEffect(() => {
    if (isPanelOpen) {
      console.log('coucou', panelContentRef.current)
      panelContentRef.current.focus()
    }
  }, [isPanelOpen])


  return (
    <>
      <div 
        ref={panelContentRef}
        tabIndex="-1"
        className="transition_6 fixed h-screen w-full md:w-[600px] bg-dark-opacity-9 top-0 right-0 z-[100]  border-l border-white"
        style={{ clipPath: `${isPanelOpen ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'}` }}>
          <div className="relative">
            <div className="md:pt-8 p-6 md:p-10 h-full text-white">
              <h3 className="text-4xl mb-6">Plan</h3>
              <div className="mt-20">
                <div className="mb-4 text-xl">Vous êtes ici : {currRoomName}</div>
                {children}
              </div>
            </div>
            <button 
              tabIndex={isPanelOpen ? '1' : '-1'}
              className="absolute cursor-pointer text-4xl top-2 right-2 text-white" 
              onClick={() => handleChange(false)}
              aria-label="Close menu">
              <svg 
                className="svg-icon fill-white" width="40px" height="40px" 
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"  />
              </svg>
            </button>
          </div>
      </div>
      <div className="fixed inset-0" onClick={() => handleChange(false)}
      style={{ zIndex: `${isPanelOpen ? '10' : '-1'}` }}></div>
    </>
  )
}