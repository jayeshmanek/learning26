import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const OmdbSearch = () => {

    const [movies, setmovies] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState("");

    const navigate = useNavigate();

    // ===== SEARCH MOVIE =====
    const searchMovie = async () => {
        if (!searchText.trim()) return;

        setloading(true);
        seterror("");

        try {
            const res = await axios.get(
                `https://www.omdbapi.com/?apikey=9d57be0b&s=${searchText}`
            );

            if (res.data.Response === "True") {
                setmovies(res.data.Search || []);
            } else {
                setmovies([]);
                seterror("No movies found");
            }

        } catch (err) {
            console.log(err);
            setmovies([]);
            seterror("Something went wrong");
        }

        setloading(false);
    };

    // ===== ENTER KEY SEARCH =====
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            searchMovie();
        }
    };

    return (
        <div style={{ textAlign: "center" }}>

            <h1>OMDB SEARCH</h1>

            <input
                type="text"
                placeholder="Search movie..."
                value={searchText}
                onChange={(e) => setsearchText(e.target.value)}
                onKeyDown={handleKeyPress}
                style={{
                    padding: "10px",
                    width: "250px",
                    marginRight: "10px",
                    borderRadius: "5px"
                }}
            />

            <button onClick={searchMovie}>SEARCH</button>

            {loading && <h3>Loading...</h3>}
            {error && <h3 style={{ color: "red" }}>{error}</h3>}

            {/* ===== GRID ===== */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "20px",
                    padding: "20px"
                }}
            >
                {movies.map((movie) => (
                    <div
                        key={movie.imdbID}
                        onClick={() => navigate(`/watch/${movie.imdbID}`)}
                        style={{
                            backgroundColor: "#111",
                            color: "white",
                            padding: "15px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
                            cursor: "pointer"
                        }}
                    >
                        <img
                            src={
                                movie.Poster !== "N/A"
                                    ? movie.Poster
                                    : "https://dummyimage.com/300x450/000/fff.jpg&text=No+Image"
                            }
                            alt={movie.Title}
                            style={{
                                width: "100%",
                                height: "300px",
                                objectFit: "cover",
                                borderRadius: "8px"
                            }}
                        />

                        <h4>{movie.Title}</h4>
                        <p>{movie.Year}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};
