import React from 'react'
import { useState,useEffect } from 'react'
import MovieCards from './MovieCards';

const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
   method: 'GET',
   headers:{
      accept:'application/json',
      Authorization:`Bearer ${API_KEY}`
   }
};

const SuggestionHero = () => {
  const [movie,setMovie] = useState([]);
  const [errorMessage,setErrorMessage] = useState('');
  const fetchMovies = async()=>{
      try{
          const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
          const response = await fetch(endpoint,API_OPTIONS);
          const data = await response.json();

          if(data.results){
            setMovie(data.results.splice(0,5));
          }
          else{
            setErrorMessage('Unable to load movies')
          }
                 
      }catch(e){
         console.error(`Unable to fetch movies: ${e}`); 
         setErrorMessage('Error fetching movies. Please try again later.')
      }
  };
  
  useEffect(()=>{
       fetchMovies();
  },[]);

  return (
    <section className='absolute bottom-[4rem] left-[2rem] w-full px-[20rem] text-white'>
      <h2 className='text-xl font-bold mb-5 px-36'>{movie.length ?'Trending Movies':null}</h2>
      {errorMessage&&<p>{errorMessage}</p>}
      <div className='display flex gap-4 justify-center'>
        {movie.map((value,index)=>(
             <MovieCards key={index} movie={value}/>
        ))} 
      </div>
    </section>
  )
}

export default SuggestionHero