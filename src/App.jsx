import React from 'react'
import ArtBackground from './ArtBackground'
import NavBar from './NavBar'
import HeroText from './HeroText'
import SuggestionHero from './SuggestionHero'

const App = () => {
  return (  
        <ArtBackground>
           <NavBar/>
           <HeroText/>
           <SuggestionHero/>
        </ArtBackground>
  )
}

export default App