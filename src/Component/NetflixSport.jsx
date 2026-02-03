import React from "react";

import cr from "../assets/images/NetflixSport/cricket.jpg";
import bs from "../assets/images/NetflixSport/basketball.jpg";
import f1 from "../assets/images/NetflixSport/formula1.jpg";

import "../assets/css/NetflixSport.css";

const NetflixSport = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-3">Sports</h1>
      <p className="text-center text-muted">
        Watch live sports, highlights, and exclusive events on Netflix.
      </p>

      {/* 🔥 ONE LINE SPORTS ROW */}
      <div className="tv-show-row mt-4">

        {/* Basketball */}
        <div className="card tv-card">
          <img src={bs} className="card-img-top" alt="Basketball" />
          <div className="card-body">
            <h5 className="card-title">Basketball</h5>
            <p className="card-text">
              Watch exciting basketball matches and tournaments.
            </p>
          </div>
        </div>

        {/* Cricket */}
        <div className="card tv-card">
          <img src={cr} className="card-img-top" alt="Cricket" />
          <div className="card-body">
            <h5 className="card-title">Cricket</h5>
            <p className="card-text">
              Enjoy live cricket matches, highlights, and analysis.
            </p>
          </div>
        </div>

        {/* Formula 1 */}
        <div className="card tv-card">
          <img src={f1} className="card-img-top" alt="Formula 1" />
          <div className="card-body">
            <h5 className="card-title">Formula 1</h5>
            <p className="card-text">
              High-speed racing action and behind-the-scenes coverage.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NetflixSport;
