import React from "react";
import { getNowPlayingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchlistIcon from '../components/cardIcons/addToWatchlist'

const NowPlayingMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('nowPlaying', getNowPlayingMovies);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const nowPlayingMovies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const nowPlaying = nowPlayingMovies.filter(m => m.watch)
  console.log("Filtered Watchlist:", nowPlaying);
  localStorage.setItem('watchlist', JSON.stringify(nowPlaying))

  return (
    <PageTemplate
      title="Now Playing Movies"
      movies={nowPlayingMovies}
      action={(movie) => {
        return <AddToWatchlistIcon movie={movie} />
      }}
    />
);
};
export default NowPlayingMoviesPage;