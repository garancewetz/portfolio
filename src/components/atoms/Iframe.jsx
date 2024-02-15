export default function Iframe ({width = '560', height = '100%', src = 'aqugL6GVYE8'}) {
  return (
    <iframe className="absolute left-1/2 -translate-x-1/2" 
      width={width} height={height} 
      src={`https://www.youtube.com/embed/${src}?si=Q6en0bsqV_yC6S2j&autoplay=1&mute=1&loop=1&controls=0`} 
      title="YouTube video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  )
}