import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import WatchlistIcon from "@mui/icons-material/Visibility"
import Grid from "@mui/material/Grid2";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import React, { useContext  } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

// showPopularity set to 'false' by default to not be visible on other pages
export default function MovieCard({ movie, action, showPopularity = false }) { 
  const { favorites } = useContext(MoviesContext);
  const { watchlist } = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  if (watchlist.find((id) => id === movie.id)) {
    movie.watchlist = true;
  } else {
    movie.watchlist = false
  }

  return (
    <Card
    sx={{
      "&:hover": {
        boxShadow: 10,
        transition: "ease-in-out",
        transform: "scale(1.02)"
      }
    }}>
      <CardHeader
        avatar={
          movie.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : movie.watchlist ? (
            <Avatar sx={{ backkgroundColor: 'blue' }}>
              <WatchlistIcon />
            </Avatar> 
        ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
        {showPopularity &&(
          <Typography varient="body1" sx={{ marginTop: 1}}>
            Popularity: {movie.popularity.toFixed(1)}
          </Typography>
        )}
      </CardContent>
      <CardActions disableSpacing>
      
        {action(movie)}
      
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>

        <Link to={`/movie/${movie.id}/recommendations`} style={{ textDecoration: "none"}}>
          <ManageSearchIcon sx={{ cursor: "pointer", color: "green", fontSize: 30, marginLeft: 1}}
          titleAccess="View Recommendations"
          />
        </Link>
        
      </CardActions>
    </Card>
  );
}