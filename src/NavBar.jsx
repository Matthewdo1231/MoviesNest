import logo from './assets/logo.png'
import SearchBar from './SearchBar'
import NavBarTags from './NavBarTags'

const NavBar = () => {
  return (
    <nav className='fixed z-10 flex top-0 w-full h-[10rem] px-[20rem] bg-gradient-to-b from-black to-transparent'>
     <ul className='flex justify-between items-center w-full'>
          <img className='h-[8rem] mt-2' src={logo} alt="logo"/>
          <NavBarTags/>
          <SearchBar/>
      </ul>   
    </nav>
  )
}

export default NavBar