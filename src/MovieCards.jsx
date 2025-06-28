const endpoint = "https://image.tmdb.org/t/p/original/"

const MovieCards = ({movie}) => {
  let imgEndpoint = `${endpoint}${movie.poster_path}`;
  return (
    <div className='flex min-w-[200px] px-2'> 
     <div className='relative rounded-xl bg-black text-white group'> 
          <img className='h-[17rem] rounded-xl group-hover:opacity-[.5] duration-500 group-hover:cursor-pointer' src={imgEndpoint}/>
          <div className="absolute bottom-0 left-0 w-full h-[12rem] group-hover:h-[17rem] group-hover:cursor-pointer 
                          rounded-xl bg-gradient-to-t from-black to-transparente"></div>
          <p className='absolute bottom-2 left-4'>{movie.title}</p>
          <img className='hidden absolute w-20 rounded-[22rem] bottom-[6rem] left-[3rem] group-hover:block group-hover:cursor-pointer 'src='public/playbutton.PNG'/>
        </div>
      </div>  
  )
}

export default MovieCards