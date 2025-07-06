import React from 'react'
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import useDebounce from './useDebounce';

const API_BASE_URL = 'https://api.themoviedb.org/3/search/movie?query=';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method:'GET',
  headers:{
    accept:'application/json',
    Authorization:`Bearer ${API_KEY}`,
  }
}

const SearchBar = () => {
   const [value, setValue] = useState("");
   const debouncedInput = useDebounce(value);

   const fetchMovies = async () => {
       try{
        const endpoint = `${API_BASE_URL}${debouncedInput}`
        const response = await fetch(endpoint,API_OPTIONS);
        const data = await response.json();
        console.log(data)

      }catch(e){

      }

   }

  useEffect(()=>{
      fetchMovies()
    },[debouncedInput])

  return (
  <>
    <div className='relative h-[3rem] w-[30rem]'> 
    <FontAwesomeIcon className='text-orange-400 absolute top-3 left-3 text-[1.2rem]' icon={faMagnifyingGlass}/>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-2 pl-10 w-[100%] text-white border-orange-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Search for Movies or Series"
      />
      </div>
     </> 
     
  );
}

export default SearchBar