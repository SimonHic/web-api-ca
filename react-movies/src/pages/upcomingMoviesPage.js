import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchlistIcon from '../components/cardIcons/addToWatchlist'

const UpcomingMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const upcomingMovies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const watchlist = upcomingMovies.filter(m => m.watch)
  console.log("Filtered Watchlist:", watchlist);
  localStorage.setItem('watchlist', JSON.stringify(watchlist))

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcomingMovies}
      action={(movie) => {
        return <AddToWatchlistIcon movie={movie} />
      }}
    />
);
};
export default UpcomingMoviesPage;