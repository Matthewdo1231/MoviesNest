import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const API_BASE_MOVIE_URL = "https://api.themoviedb.org/3/tv/";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method:'GET',
  headers:{
     accept:'application/json',
     Authorization:`Bearer ${API_KEY}`
  }
}

const imgEndpoint = "https://image.tmdb.org/t/p/original/"

const WatchPage = () => {
const { id , season, episode } = useParams();
const [seasonData, setSeasonData] = useState(null);
const [currentSeason,setCurrentSeason] = useState(season)
const [currentEpisode,setCurrentEpisode] = useState(episode)
console.log(currentSeason,currentEpisode)
const [loading, setLoading] = useState(true);
const srcLink = season == undefined ? `https://vidsrc.xyz/embed/movie?tmdb=${id}` : `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=${currentSeason}&episode=${currentEpisode}`

useEffect(()=>{   
    fetch(`https://api.themoviedb.org/3/tv/${id}`,API_OPTIONS) //make this dynamic
     .then(response => response.json())
     .then(data=>{  
            setSeasonData(data);
            setLoading(false)
     }).catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
},[])

useEffect(()=>{console.log(seasonData)},[seasonData])

  if(loading) return<div>Loading...</div>
  return (
  <div className='absolute top-40 flex flex-col items-center w-full'>
    <iframe
    src={srcLink}
    width="70%"
    height="600"
    allow="autoplay; encrypted-media"
    allowFullScreen  
    ></iframe>
    
    <section className='w-full flex justify-center mt-4'>
    <div className='w-[70%] flex justify-between'>
       <div className='w-[15%] flex'>
          <img className='w-[100%]' src={`${imgEndpoint}${seasonData.poster_path}`}/>
         </div>
       <div className='w-[80%] flex flex-col '>
        <h1 className='text-3xl font-bold text-white'>
           {seasonData.original_name}
        </h1>
        <h2 className='text-lg text-white italic mt-4'>
          {seasonData.overview}
        </h2>
      </div>
     </div>  
    </section>

  </div>
   
  )
}

export default WatchPage