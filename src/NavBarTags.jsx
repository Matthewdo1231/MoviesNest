import React from 'react'

const NavBarTags = () => {
  return (
    <div className='w-[36rem]'>
        <ul className='flex items-center justify-around text-white font-bold'>
            <li className='hover:cursor-pointer hover:text-orange-300'>HOME</li>
            <li className='hover:cursor-pointer hover:text-orange-300'>GENRES</li>
            <li className='hover:cursor-pointer hover:text-orange-300'>COUNTRIES</li>
            <li className='hover:cursor-pointer hover:text-orange-300'>MOVIES</li>
            <li className='hover:cursor-pointer hover:text-orange-300'>SERIES</li>
        </ul>
    </div>
  )
}

export default NavBarTags