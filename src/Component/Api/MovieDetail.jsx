import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const API_KEY = "9d57be0b";   // ✅ real key

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
        );

        if (res.data.Response === "True") {
          setMovie(res.data);
        } else {
          setMovie(false);
        }

      } catch (error) {
        console.log(error);
        setMovie(false);
      }
    };

    getMovieDetail();
  }, [id]);

  if (movie === false)
    return <h2 className="text-center mt-5">Movie Not Found</h2>;

  if (!movie)
    return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="img-fluid"
          />
        </div>

        <div className="col-md-8">
          <h2>{movie.Title}</h2>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
