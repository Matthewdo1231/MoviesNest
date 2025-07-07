import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTmdbValue } from './filterID';
import MovieGrid from './MovieGrid';

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS ={
   method: 'GET',
   headers:{
      accept:'application/json',
      Authorization: `Bearer ${API_KEY}`
   },
}


const FilteredPage = ({routeSegment}) => {
  const [movies,setMovies] = useState([]);
  const [errorMessage,setErrorMessage] = useState('');

  const segment = routeSegment === 'genres' ? 'genre' : routeSegment === "countries" ? 'country' : routeSegment === "movies" ? 'movies' : "series";
  const params = useParams();
  const id = params[segment];
  const queryID = getTmdbValue(segment,id);

  const fetchMovies= async()=>{
     try{
       const endpoint = segment === 'genre' ? `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&with_genres=${queryID}'`
                      : segment === 'country'? `${API_BASE_URL}/discover/movie?with_origin_country=${queryID}`
                      : segment === 'movies'? `${API_BASE_URL}/discover/movie?language=en-US&page=1`
                      : segment === "series" ? `${API_BASE_URL}/discover/tv?sort_by=popularity.desc`
                      : null;
       const response = await fetch(endpoint,API_OPTIONS);
       const data = await response.json();

       if(data.results){
         setMovies(data.results);
       }else{
         setErrorMessage('Unable to load movies');
       }

     }catch(e){
        console.error(`Unable to fetch movies: ${e}`);
        setErrorMessage('Error fetching movies')
     };
  };

 useEffect(() => {
  fetchMovies();
}, [segment, queryID]);

  return (
   <MovieGrid movies={movies} segment={segment} id={id}/>
  )
}

export default FilteredPage