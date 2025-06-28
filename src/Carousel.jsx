import MovieCards from './MovieCards'

const Carousel = ({movie}) => {
  return (
     <div className="flex gap-1 justify-center"> 
       {movie.map((value, index) => (
      <MovieCards key={index} movie={value} />
          ))}     
     </div>
  )
}

export default Carousel