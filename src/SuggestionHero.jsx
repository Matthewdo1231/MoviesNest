import { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import MovieCards from './MovieCards';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const SuggestionHero = () => {
  const [movie, setMovie] = useState([]);
  const [moviesArray, setMoviesArray] = useState([]);
  const [offsetX, setOffsetX] = useState(90); 
  const [errorMessage, setErrorMessage] = useState('');

  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      const data = await response.json();

      if (data.results) {
        setMovie(data.results.splice(0, 14));
      } else {
        setErrorMessage('Unable to load movies');
      }
    } catch (e) {
      console.error(`Unable to fetch movies: ${e}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    }
  };

 const moveRight = () => {
  setOffsetX((prev) => {
    if (prev < 220) return prev + 12; 
    return prev;
  });
};

const moveLeft = () => {
  setOffsetX((prev) => {
    if (prev > 0) return prev - 15;
    return prev;
  });
};

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    setMoviesArray([movie, movie, movie]); 
  }, [movie]);

  return (
    <>
    <section className="hidden lg:block absolute bottom-[4rem] w-full px-[10rem] text-white">
      <h2 className="text-xl font-bold mb-5">{movie.length ? 'Trending Movies' : null}</h2>
      {errorMessage && <p>{errorMessage}</p>}

      <div className="relative overflow-hidden">
        <div
          className="flex justify-center"
          style={{
            transform: `translateX(-${offsetX}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {moviesArray.map((value, index) => (
            <Carousel key={index} movie={value} />
          ))}
        </div>
      </div>

      <FontAwesomeIcon
        onClick={moveLeft}
        className="absolute top-36 left-36 text-[2rem] rounded-3xl bg-black p-4 text-gray-400 hover:cursor-pointer hover:text-white"
        icon={faChevronLeft}
      />
      <FontAwesomeIcon
        onClick={moveRight}
        className="absolute top-36 right-36 text-[2rem] rounded-3xl bg-black p-4 text-gray-400 hover:cursor-pointer hover:text-white"
        icon={faChevronRight}
      />
    </section>

    <section className='lg:hidden absolute top-[40rem] left-[4rem] md:left-[2rem] mt-6'>
      <div className='w-full grid place-items-center grid-cols-2 md:grid-cols-3 gap-16'>
        {movie.map((item,index)=>(
          <MovieCards key={index} movie={item}/>
       ))}
      </div>
 
    </section>
    </>
  );
};

export default SuggestionHero;
