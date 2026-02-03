import React from "react";

import ff from "../assets/images/NetflixMovie/Fastandfurious.jpg";
import av from "../assets/images/NetflixMovie/avatar.jpg";
import tr from "../assets/images/NetflixMovie/Thor.jpg";

import "../assets/css/NetflixMovie.css";

const NetflixMovie = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-3">Movies</h1>
      <p className="text-center text-muted">
        Watch blockbuster movies, trending films, and Netflix originals.
      </p>

      {/* 🔥 ONE LINE MOVIE ROW */}
      <div className="tv-show-row mt-4">

        <div className="card tv-card">
          <img src={ff} className="card-img-top" alt="Fast and Furious" />
          <div className="card-body">
            <h5 className="card-title">Fast & Furious</h5>
            <p className="card-text">
              An action-packed adventure with thrilling moments.
            </p>
          </div>
        </div>

        <div className="card tv-card">
          <img src={av} className="card-img-top" alt="Avatar" />
          <div className="card-body">
            <h5 className="card-title">Avatar</h5>
            <p className="card-text">
              A gripping story filled with drama and suspense.
            </p>
          </div>
        </div>

        <div className="card tv-card">
          <img src={tr} className="card-img-top" alt="Thor" />
          <div className="card-body">
            <h5 className="card-title">Thor</h5>
            <p className="card-text">
              A heart-touching film with unforgettable characters.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NetflixMovie;
