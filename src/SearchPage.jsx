import React from 'react'
import MovieGrid from './MovieGrid'
import { SearchContext } from './RouteLayout';
import { useContext } from 'react';

const SearchPage = () => {
  const { searchMovies, setSearchMovies } = useContext(SearchContext);
  return (
     <MovieGrid movies={searchMovies}/>
  )
}

export default SearchPage