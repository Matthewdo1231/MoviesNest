import React from 'react'
import MovieCards from './MovieCards'

const MovieGrid = ({movies=[],segment='',id=''}) => {
  return (
<div className='absolute top-40 w-full px-[20rem]'>
    <h1 className='text-white text-2xl mb-2'>{`RESULTS OF ${segment.toUpperCase()} : ${id || '' }`}</h1>
    <div className='w-full grid place-items-center grid-cols-6 gap-1'> 
       {movies.map((movie,index)=>(
          <MovieCards key={index} movie={movie}/>
       ))}
    </div>
    </div> 
  )
}

export default MovieGrid