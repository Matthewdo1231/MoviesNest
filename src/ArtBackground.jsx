import React from 'react'
import bodgBg from './assets/bodybg.jpeg'

const ArtBackground = ({children}) => {
  return (
   <>
   <img src={bodgBg} alt="Sample" className="opacity-30 hidden lg:block" />  
    <div className="absolute bottom-[-12rem] left-0 w-full h-[20rem] bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
   {children}    
   </>
  )
}

export default ArtBackground