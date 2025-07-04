import React from 'react'
import { Link } from 'react-router-dom';

const GenresTags = ({tag,currhovered,setCurrHovered}) => {

const curretTag = tag === 'genres' ? genres :countries;
 
const isVisible = tag === currhovered;

const baseStyle = 'absolute w-[40rem] top-13 grid grid-rows-11 grid-flow-col gap-2 p-4 text-white bg-black outline-2 outline-amber-600 transition-opacity duration-300 ease-out';
const visibilityStyle = isVisible ? 'opacity-100' : 'opacity-0 invisible';

const style = `${baseStyle} ${visibilityStyle}`;
 
  return (
  <ul className={`${style} `}>
     {curretTag.categories.map((item,index)=>(
        <li onClick={()=>setCurrHovered('leave')} className='hover:bg-amber-600' key={index}>
             <Link className='block w-full h-full p-1' to={`/${tag}/${encodeURIComponent(item)}`}>{item}</Link>
          </li>
     ))}
  </ul>
  )
}

export default GenresTags

const genres = {
  categories: [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western"
  ]
};

const countries = {
    categories: [
    "United States",
    "Canada",
    "Australia",
    "Spain",
    "United Kingdom",
    "South Korea",
    "Indonesia",
    "France",
    "Italy",
    "Thailand",
    "Ireland",
    "Switzerland",
    "Germany",
    "Belgium",
    "Czech Republic"
    ]
}