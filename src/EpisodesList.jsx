import React from 'react'

const EpisodesList = ({episodeslength}) => {
const episodes = [];
  for(let i=1; i <= episodeslength ; i++){
    episodes.push(<div 
        className='px-[5.5rem] py-[.8rem] whitespace-nowrap hover:cursor-pointer hover:bg-amber-500'
        key={i}>Episode {i}</div>)
   }
  return (
      <div className='absolute top-12 left-1 flex flex-col h-[10rem] overflow-y-auto'>
           {episodes}     
      </div>
  )
}

export default EpisodesList