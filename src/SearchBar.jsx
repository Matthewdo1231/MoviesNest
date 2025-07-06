import React from 'react'
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import useDebounce from './useDebounce';
import { mergeSearchResult } from './mergSearchResult';

const API_BASE_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie?language=en-US&query=';
const API_BASE_TV_SERIES_URL = 'https://api.themoviedb.org/3/search/tv?language=en-US&query='; 
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method:'GET',
  headers:{
    accept:'application/json',
    Authorization:`Bearer ${API_KEY}`,
  }
}
const imgEndpoint = "https://image.tmdb.org/t/p/original/"


const SearchBar = () => {
   const [value, setValue] = useState("");
   const debouncedInput = useDebounce(value);
   const [tvSeriesResult, setTvSeriesResult] = useState([]);
   const [moviesResult, setMoviesResult] = useState([]);
   const [mergeMovies, setMergeMovies] = useState([]);
   const [errorMessage,setErrorMessage] = useState();

   async function fetchMovies(){
       try{
        const endpoint = `${API_BASE_MOVIE_URL}${debouncedInput}`
        const response = await fetch(endpoint,API_OPTIONS);
        const data = await response.json();

        if(data.results){
          setMoviesResult(data.results.splice(0,5));
        }else{
          setErrorMessage('Unable to load movies');
        }

       
      }catch(e){
        console.log(`Error fetching result,${e}`)
        setErrorMessage('Unable to fetch movies')
      }

   }
   async function fetchTVseries(){
       try{
        const endpoint = `${API_BASE_TV_SERIES_URL}${debouncedInput}`
        const response = await fetch(endpoint,API_OPTIONS);
        const data = await response.json();

        if(data.results){
          setTvSeriesResult(data.results.splice(0,5));
        }else{
          setErrorMessage('Unable to load movies');
        }

       
      }catch(e){
        console.log(`Error fetching result,${e}`)
        setErrorMessage('Unable to fetch movies')
      }

   } 


  useEffect(()=>{
    fetchMovies()
    fetchTVseries()
    },[debouncedInput])

 useEffect(()=>{
      const merged = mergeSearchResult(tvSeriesResult,moviesResult)
      setMergeMovies(merged);
    },[moviesResult,tvSeriesResult])

  return (
  <div className='relative h-[3rem] w-[30rem]'>
    <div className='w-full'> 
    <FontAwesomeIcon className='text-orange-400 absolute top-3 left-3 text-[1.2rem]' icon={faMagnifyingGlass}/>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-2 pl-10 w-[100%] text-white border-orange-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Search for Movies or Series"
      />
      </div>
      <div className='w-full flex flex-col'>
          {mergeMovies.map((movie, index)=>(
            <div key={index} className='w-full flex text-white bg-black hover:bg-amber-600 transition-colors duration-200 cursor-pointer'> 
              <img className="h-18 py-2 mx-4" src={`${imgEndpoint}${movie.poster_path}`}/>
              <div className='mt-4'>{movie.original_title|| movie.original_name}</div>
           </div>
          ))}
      </div>
     </div> 
     
  );
}

export default SearchBar