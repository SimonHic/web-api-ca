import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getMovieCredits } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

export default function MovieCredits({ movie }) {
  const { data , error, isLoading, isError } = useQuery(
    ["credits", movie.id ],
    () => getMovieCredits(movie.id)
  );
  
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const cast = data.cast;

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="credits table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: "bold"}}>Actor</TableCell>
            <TableCell align="center" sx={{fontWeight: "bold"}}>Character</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cast.map((r) => (
            <TableRow key={r.id}>
              <TableCell component="th" scope="row">
                {r.name}
              </TableCell>
              <TableCell align="center">{r.character}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}