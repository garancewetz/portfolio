import { useState } from "react"

export default function Plan ({
    goToRoom,
    rooms = [], 
    currentRoom = 'home'
  }) {
  const roomSm = 'bg-dark col-span-1 h-[50px] w-[65px] md:h-[65px] md:w-[80px] border cursor-pointer relative'
  const roomLg = 'bg-dark col-span-2 h-[50px] w-[130px] md:h-[65px] md:w-[160px] border cursor-pointer relative'
  const roomName = 'absolute left-full top-1/2 -translate-y-1/2 pl-10 before:absolute before:content-[""] before:w-8 before:h-[2px] before:top-1/2 before:bg-white before:left-0 select-none'

  const lightUpCurrentRoom = (curr) => {
    return currentRoom === curr.id && 'bg-yellow'
  }

  return (
    <div className="text-white">
      <div className="grid grid-cols-3 w-fit">
        {rooms.map((room,i) => ( 
          i === 0 &&
          <div 
            key={`room-${i}`} 
            className={`${roomLg} ${lightUpCurrentRoom(room)}`}
            onClick={() => goToRoom(room)}>
            <div className={roomName}>{room.name}</div>
          </div>
        ))}
        <div className="col-span-2 col-start-2">
          {rooms.map((room,i) => ( 
            i > 0 && i < 4 &&
            <div 
              key={`room-${i}`} 
              className={`${roomSm} ${lightUpCurrentRoom(room)}`}
              onClick={() => goToRoom(room)}>
                <div className={roomName}>{room.name}</div>
              </div>
          ))}
          <div className={`grid grid-cols-2`}>
          {rooms.map((room,i) => ( 
            i === 4 &&
            <div 
              key={`room-${i}`} 
              className={`${roomLg} ${lightUpCurrentRoom(room)}`}
              onClick={() => goToRoom(room)}>
                <div className={roomName}>{room.name}</div>
              </div>
          ))}
           {rooms.map((room,i) => ( 
            i === 5 &&
            <div 
              key={`room-${i}`} 
              className={`${roomSm} ${lightUpCurrentRoom(room)} col-start-2`}
              onClick={() => goToRoom(room)}>
              <div className={roomName}>{room.name}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}