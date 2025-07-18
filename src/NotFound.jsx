import React from 'react'
import { Link } from 'react-router-dom'

const buttonStyle = {
  padding: '10px 20px',
  color: 'white',
  textDecoration: 'none',
  border: 'none',
  borderRadius: '5px',
  display: 'inline-block',
};

const NotFound = () => {
  return (
   <div className='absolute flex top-[30%]  w-full justify-center p-4 text-white'>
    <section className='flex flex-col justify-center items-center gap-10'>
      <h1 className='text-6xl font-bold'>404 PAGE NOT FOUND</h1>
     <p>The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.</p>
     <Link to="/" style={buttonStyle} className='hover:bg-amber-600 bg-orange-500'>
      Go Home
     </Link>
    </section>
   
   </div>
 
  )
}

export default NotFound

