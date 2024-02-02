export default function SvgText ({ text }) {
  return (
    <svg viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}>
      <defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%">
          <rect x="0" y="0" width="100%" height="100%" fill="#fff"
          />
          <text textAnchor="middle" x="20%" y="50%" dy="10" fill="rgb(19, 20, 27)" 
          className='text-5xl'>{text}</text>
        </mask>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" mask="url(#mask)" fill="var(--dark)"/>
    </svg>
  )
}