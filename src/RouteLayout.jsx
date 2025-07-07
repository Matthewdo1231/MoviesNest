import ArtBackground from './ArtBackground'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import React, { createContext, useState } from 'react';
export const SearchContext = createContext();

const RouteLayout = () => {
   const [searchMovies, setSearchMovies] = useState([]);
  return (  
  <SearchContext.Provider value={{ searchMovies, setSearchMovies }}> 
     <ArtBackground>
        <NavBar/>
        <Outlet/>
     </ArtBackground>
      </SearchContext.Provider> 
  )
}

export default RouteLayout