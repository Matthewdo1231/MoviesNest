import React from 'react'


const GenresTags = ({tag}) => {
 const curretTag = tag === 'genres' ? genres :countries;
  return (
  <ul className="absolute w-[40rem] top-13 hidden group-hover:grid grid-rows-11 grid-flow-col gap-2 p-4 text-white bg-black outline-2 outline-amber-600">
     {curretTag.categories.map((item,index)=>(
        <li className='hover:bg-amber-600 p-1' key={index}>{item}</li>
     ))}
  </ul>
  )
}

export default GenresTags

const genres = {
  categories: [
    "Action",
    "Action & Adventure",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Costume",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "Game-Show",
    "History",
    "Horror",
    "Jen Statsky",
    "Kungfu",
    "Music",
    "Musical",
    "Mystery",
    "Mythological",
    "News",
    "Psychological",
    "Reality",
    "Reality-TV",
    "Romance",
    "Sci-Fi",
    "Sci-Fi & Fantasy",
    "Science Fiction",
    "Short",
    "Sitcom",
    "Sport",
    "Talk-Show",
    "Thriller",
    "TV Movie",
    "TV Show",
    "Vito Glazers",
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