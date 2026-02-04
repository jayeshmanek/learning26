import React from 'react';
import { Link } from "react-router-dom";   // ✅ ADDED

import mh from "../assets/images/Moneyheist.jpg";
import wd from "../assets/images/Wednesday.jpg";
import st from "../assets/images/strangerthings.jpg";

import "../assets/css/NetflixShowcard.css";

export const Netflixshow = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-3">TV Shows</h1>
      <p className="text-center text-muted">
        Browse popular Netflix TV shows and trending series.
      </p>

      {/* 🔥 ONE LINE CARD ROW */}
      <div className="tv-show-row mt-4">

        {/* ✅ Stranger Things */}
        <Link
          to="/watch/Stranger Things"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="card tv-card">
            <img src={st} className="card-img-top" alt="Stranger Things" />
            <div className="card-body">
              <h5 className="card-title">Stranger Things</h5>
              <p className="card-text">
                Nine noble families fight for control over the lands of Westeros,
                while an ancient enemy rises in the north.
              </p>
            </div>
          </div>
        </Link>

        {/* ✅ Money Heist */}
        <Link
          to="/watch/Money Heist"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="card tv-card">
            <img src={mh} className="card-img-top" alt="Money Heist" />
            <div className="card-body">
              <h5 className="card-title">Money Heist</h5>
              <p className="card-text">
                A criminal mastermind plans the biggest heist in history.
              </p>
            </div>
          </div>
        </Link>

        {/* ✅ Wednesday */}
        <Link
          to="/watch/Wednesday"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="card tv-card">
            <img src={wd} className="card-img-top" alt="Wednesday" />
            <div className="card-body">
              <h5 className="card-title">Wednesday</h5>
              <p className="card-text">
                Wednesday Addams investigates strange events at her school.
              </p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};
