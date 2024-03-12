export default function Navigation ({handleChange}) {

  return (
    <nav className="fixed flex items-center right-6 top-2 z-50" >   
      {/* <div className="text-white text-xl">:･ﾟ✧:･.☽˚｡･ﾟ✧:･.:</div> */}

      <button onClick={() => handleChange(true)} aria-label="Open menu">
        <svg className="cursor-pointer" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 18L20 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 12L20 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 6L20 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </nav>
  )
}