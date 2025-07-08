import React, { useEffect } from 'react'
import MovieGrid from './MovieGrid'
import { SearchContext } from './RouteLayout';
import { useContext } from 'react';

const SearchPage = () => {
  const { searchMovies, setSearchMovies } = useContext(SearchContext);
  const {mergeMovies, setMergeMovies} = useContext(SearchContext);

  useEffect(()=>{
     setTimeout(()=>{setMergeMovies([])},100)
  },[])
  return (
     <MovieGrid movies={searchMovies}/>
  )
}

export default SearchPage