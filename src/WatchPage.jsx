import React from 'react'
import { useParams } from 'react-router-dom'

const WatchPage = () => {
const { id , season } = useParams();
const srcLink = season == undefined ? `https://vidsrc.xyz/embed/movie?tmdb=${id}` : `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=1&episode=1`
  return (
  <div className='absolute top-40 flex justify-center w-full'>
    <iframe
    src={srcLink}
    width="70%"
    height="600"
    allow="autoplay; encrypted-media"
    allowFullScreen  
    ></iframe>
    <></>
  </div>

  )
}

export default WatchPage