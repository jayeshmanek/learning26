import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Watch = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {

    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=9d57be0b&i=${id}&plot=full`
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

    fetchMovie();

  }, [id]);

  if (movie === false) {
    return (
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h2>Movie Not Found</h2>
      </div>
    );
  }

  if (!movie) {
    return (
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>{movie.Title}</h1>

      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ width: "300px", borderRadius: "10px", marginTop: "20px" }}
      />

      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p style={{ maxWidth: "700px", margin: "auto" }}>
        {movie.Plot}
      </p>
    </div>
  );
};

export default Watch;

