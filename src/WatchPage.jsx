import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SeasonList from './SeasonList';
import EpisodesList from './EpisodesList';

const API_BASE_MOVIE_URL = "https://api.themoviedb.org/3/tv/";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

const imgEndpoint = "https://image.tmdb.org/t/p/original/";

const WatchPage = () => {
  const { id, season, episode } = useParams();
  const [seasonData, setSeasonData] = useState(null);
  const [currentSeason, setCurrentSeason] = useState(season);
  const [currentEpisode, setCurrentEpisode] = useState(episode);
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  const dataLink = season === undefined
    ? 'https://api.themoviedb.org/3/movie/'
    : 'https://api.themoviedb.org/3/tv/';

  const srcLink = season === undefined
    ? `https://vidsrc.xyz/embed/movie?tmdb=${id}`
    : `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=${currentSeason}&episode=${currentEpisode}`;

  useEffect(() => {
    fetch(`${dataLink}${id}`, API_OPTIONS)
      .then(response => response.json())
      .then(data => {
        setSeasonData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(seasonData);
  }, [seasonData]);

  if (loading) return <div>Loading...</div>;

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
            <img className='w-full' src={`${imgEndpoint}${seasonData.poster_path}`} />
          </div>

          <div className='w-[80%] h-full flex flex-col'>
            <div className='w-full h-1/2'>
              <h1 className='text-3xl font-bold text-white'>
                {seasonData.original_name}
              </h1>
              <h2 className='text-lg text-white italic mt-4'>
                {seasonData.overview.length <= 400
                  ? seasonData.overview
                  : `${seasonData.overview.slice(0, 400)}...`}
              </h2>
            </div>

            <div className='w-full h-1/2 flex items-baseline gap-10 text-white'>
              {season == null ? null : (
                <>
                  <button
                    onClick={() => setIsClicked(() => 'Season')}
                    className='relative py-2 px-24 border-amber-500 focus:outline-none focus:border-amber-600 border-2 rounded-2xl'
                  >
                    {`Season ${currentSeason}`}
                    <FontAwesomeIcon
                      className="absolute right-4 bottom-3 text-white"
                      icon={faChevronDown}
                    />
                    {isClicked === 'Season' && (
                      <SeasonList seasonslength={seasonData.number_of_seasons} />
                    )}
                  </button>

                  <button
                    onClick={() => setIsClicked(() => 'Episode')}
                    className='relative py-2 px-24 border-amber-500 focus:outline-none focus:border-amber-600 border-2 rounded-2xl'
                  >
                    {`Episode ${currentEpisode}`}
                    <FontAwesomeIcon
                      className="absolute right-4 bottom-3 text-white"
                      icon={faChevronDown}
                    />
                    {isClicked === 'Episode' && (
                      <EpisodesList episodeslength={seasonData.seasons[currentSeason].episode_count} />
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WatchPage;
