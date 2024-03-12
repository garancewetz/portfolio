
export default function Plan ({
    isPanelOpen = false,
    goToRoom,
    rooms = [], 
    currentRoom = 'home'
  }) {
  const roomSm = 'block bg-transparent col-span-1 h-[50px] w-[65px] md:h-[65px] md:w-[80px] border cursor-pointer relative'
  const roomLg = 'block bg-transparent col-span-2 h-[50px] w-[130px] md:h-[65px] md:w-[160px] border cursor-pointer relative'
  const roomName = 'absolute left-full top-1/2 -translate-y-1/2 pl-10 before:absolute before:content-[""] before:w-8 before:h-[2px] before:top-1/2 before:bg-white before:left-0 select-none'

  const lightUpCurrentRoom = (curr) => {
    return currentRoom === curr.id && 'bg-white'
  }

  const tabIndex = (state) => {
    return state ? '1' : '-1'
  }

  return (
    <div className="text-white">
      <div className="grid grid-cols-3 w-fit">
        {rooms.map((room,i) => ( 
          i === 0 &&
          <button 
            tabIndex={tabIndex(isPanelOpen)}
            key={`room-${i}`} 
            className={`${roomLg} ${lightUpCurrentRoom(room)}`}
            onClick={() => goToRoom(room)}>
            <div className={roomName}>{room.name}</div>
          </button          >
        ))}
        <div className="col-span-2 col-start-2">
          {rooms.map((room,i) => ( 
            i > 0 && i < 4 &&
            <button 
              tabIndex={tabIndex(isPanelOpen)}
              key={`room-${i}`} 
              className={`${roomSm} ${lightUpCurrentRoom(room)}`}
              onClick={() => goToRoom(room)}>
                <div className={roomName}>{room.name}</div>
              </button>
          ))}
          <div className={`grid grid-cols-2`}>
          {rooms.map((room,i) => ( 
            i === 4 &&
            <button 
              tabIndex={tabIndex(isPanelOpen)}
              key={`room-${i}`} 
              className={`${roomLg} ${lightUpCurrentRoom(room)}`}
              onClick={() => goToRoom(room)}>
                <div className={roomName}>{room.name}</div>
              </button>
          ))}
           {rooms.map((room,i) => ( 
            i === 5 &&
            <button 
              tabIndex={tabIndex(isPanelOpen)}
              key={`room-${i}`} 
              className={`${roomSm} ${lightUpCurrentRoom(room)} col-start-2`}
              onClick={() => goToRoom(room)}>
              <div className={roomName}>{room.name}</div>
            </button>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}