import React from 'react'
import { Link } from 'react-router-dom'
import GenresTags from './GenresTags'

const NavBarTags = () => {
  return (
    <div className='w-[36rem]'>
        <ul className='flex items-center justify-around text-white font-bold'>
            <li className='hover:cursor-pointer hover:text-orange-300'><Link to="/">HOME</Link></li>
            <li className='py-4 px-2 hover:cursor-pointer hover:text-orange-300 relative group'>GENRES<GenresTags tag="genres"/></li>
            <li className='py-4 px-2 hover:cursor-pointer hover:text-orange-300 relative group'>COUNTRIES<GenresTags tag="countries"/></li>
            <li className='hover:cursor-pointer hover:text-orange-300'>MOVIES</li>
            <li className='hover:cursor-pointer hover:text-orange-300'>SERIES</li>
        </ul>
    </div>
  )
}

export default NavBarTags