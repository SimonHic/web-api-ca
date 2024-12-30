import React from "react";
import { getMovieRecommendations } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { useParams } from "react-router-dom";

const RecommendedMoviesPage = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError }  = useQuery(['recommendations', { id }], getMovieRecommendations);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  // Obtain the list of recommended movies
  const recommendations = data.results;

  console.log("Recommendations for Movie ID:", id, recommendations);

  return (
    <PageTemplate
      title="Recommended Movies"
      movies={recommendations}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};
export default RecommendedMoviesPage;