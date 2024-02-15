
export default function Svg ({ }) {
  return (
    <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(2) rotate(0)'>
      <rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/>
      <path d='M0-10C-.011-4.49-4.485.03-10 .03-4.485.03-.011 4.49 0 10 .011 4.498 4.493.001 10-.01 4.493-.02.012-4.498 0-10zm0 20c-.011 5.51-4.485 10.03-10 10.03 5.515 0 9.989 4.46 10 9.97.011-5.502 4.493-9.999 10-10.01C4.493 19.98.012 15.502 0 10zm20-20C19.989-4.49 15.515.03 10 .03c5.515 0 9.989 4.46 10 9.97.011-5.502 4.493-9.999 10-10.01-5.507-.01-9.988-4.488-10-9.99zm0 20c-.011 5.51-4.485 10.03-10 10.03 5.515 0 9.989 4.46 10 9.97.011-5.502 4.493-9.999 10-10.01-5.507-.01-9.988-4.488-10-9.99z'  strokeWidth='7' stroke='var(--dark)' fill='none'/>
      <path d='M10 0C9.989 5.51 5.515 10.03 0 10.03c5.515 0 9.989 4.46 10 9.97.011-5.502 4.493-9.998 10-10.01-5.507-.01-9.988-4.488-10-9.99z'  strokeWidth='7' stroke='var(--dark)' fill='none'/></pattern></defs>
      <rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/>
    </svg>
  )
}