import React from "react";
import { getPopularMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { Typography } from "@mui/material";

const PopularMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('popular', getPopularMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  // Sort popular movies array in Descending Order based on popularity score value
  const popularMovies = data.results.sort((a, b) => b.popularity - a.popularity);

  // Redundant, but necessary to avoid app crashing.
  const favorites = popularMovies.filter(m => m.favorite)

  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title="Popular Movies"
      movies={popularMovies}
      action={(movie) => (
        <div>
        <AddToFavoritesIcon movie={movie} />
        <Typography variant="body2" sx={{ marginTop: 1}}>
            Popularity Score: {movie.popularity.toFixed(1)}
        </Typography>
        </div>
        )
      }
    />
);
};
export default PopularMoviesPage;