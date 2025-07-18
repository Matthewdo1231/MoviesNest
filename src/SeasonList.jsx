import React from 'react'
import { useNavigate } from 'react-router-dom';

const SeasonList = ({seasonslength, id, currentEpisode, setCurrentSeason, setIsClicked}) => {
 const navigate = useNavigate();
 const seasons = [];
  for(let i=1; i <= seasonslength ; i++){
    seasons.push(<div       
        onClick={()=>{
           setIsClicked(null)
           setCurrentSeason(i);
           navigate(`/watch/tv/${id}/${i}/${currentEpisode}`)}}
        className='px-[5.5rem] py-[.8rem] whitespace-nowrap hover:cursor-pointer hover:bg-amber-500'
        key={i}>Season {i}</div>)
        }
  return (
      <div className='absolute top-12 left-1 flex flex-col h-[10rem] overflow-y-auto'>
           {seasons}     
      </div>
  )
}

export default SeasonList