import ArtBackground from './ArtBackground'
import NavBar from './NavBar'
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