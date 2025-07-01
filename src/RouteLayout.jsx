import React from 'react'
import ArtBackground from './ArtBackground'
import NavBar from './NavBar'
import SuggestionHero from './SuggestionHero'
import { Outlet } from 'react-router-dom'

const RouteLayout = () => {
  return (
       <ArtBackground>
        <NavBar/>
        <Outlet/>
     </ArtBackground>
  )
}

export default RouteLayout