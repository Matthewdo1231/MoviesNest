import React from 'react'
import { Link } from 'react-router-dom'
import GenresTags from './GenresTags'
import { useState } from 'react'


const NavBarTags = () => {
  const [currHovered, setCurrHovered] = useState('');

  return (
    <div className='w-[36rem]'>
        <ul className='flex items-center justify-around text-white font-bold'>
            <li className='hover:cursor-pointer hover:text-orange-300'><Link to="/">HOME</Link></li>
            <li onMouseEnter={()=>setCurrHovered('genres')} onMouseLeave={()=>setCurrHovered('leave')} className='py-4 px-2 hover:cursor-pointer hover:text-orange-300 relative group'>GENRES
              <GenresTags setCurrHovered={setCurrHovered} currhovered={currHovered} tag="genres"/></li>
            <li onMouseEnter={()=>setCurrHovered('countries')} onMouseLeave={()=>setCurrHovered('leave')} className='py-4 px-2 hover:cursor-pointer hover:text-orange-300 relative group'>COUNTRIES
              <GenresTags setCurrHovered={setCurrHovered} currhovered={currHovered} tag="countries"/></li>
            <li className='hover:cursor-pointer hover:text-orange-300'>MOVIES</li>
            <li className='hover:cursor-pointer hover:text-orange-300'>SERIES</li>
        </ul>
    </div>
  )
}

export default NavBarTags