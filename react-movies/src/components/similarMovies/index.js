import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getSimilarMovies } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

export default function SimilarMovies({ movie }) {
  const { data , error, isLoading, isError } = useQuery(
    ["similarMovies", movie.id ],
    () => getSimilarMovies(movie.id)
  );
  
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const similarMovies = data.results;

  return (
    <div style={{marginTop: "50px"}}>
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="similar table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: "bold"}}>Title</TableCell>
            <TableCell align="center" sx={{fontWeight: "bold"}}>Release Date</TableCell>
            <TableCell align="center" sx={{fontWeight: "bold"}}>Overview</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {similarMovies.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell align="center">
                {movie.title}
              </TableCell>
              <TableCell align="center">{movie.release_date}</TableCell>
              <TableCell align="center">{movie.overview}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}