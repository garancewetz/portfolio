export default function Circle ({ size, color }) {
  return (
    <div 
      className={`shape will-change-transform	 absolute rounded-full aspect-square ${color} opacity-20`}
      style={{ 
        width: `${size}px`,
        margin: `-${size/2}px` 
      }}
    >
    </div>
  )
}