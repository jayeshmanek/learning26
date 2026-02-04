import React from "react";
import { Link } from "react-router-dom";

import RCB from "../assets/images/Team/RCB.jpg";
import CSK from "../assets/images/Team/CSK.jpg";
import MI from "../assets/images/Team/MI.jpg";
import DC from "../assets/images/Team/DC.jpg";
import GT from "../assets/images/Team/GT.jpg";
import KKR from "../assets/images/Team/KKR.jpg";
import LSG from "../assets/images/Team/LSG.jpg";
import SRH from "../assets/images/Team/SRH.jpg";
import PNJ from "../assets/images/Team/PNJ.jpg";
import RR from "../assets/images/Team/RR.jpg";

import "../assets/css/IPLTeams.css";
 // reuse same card CSS

const IPLTeams = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-3">IPL Teams</h1>
      <p className="text-center text-muted">
        Click on any IPL team to view details.
      </p>

      {/* 🔥 IPL TEAM ROW */}
      <div className="tv-show-row mt-4">

        {/* CSK */}
        <Link to="/watch/Chennai Super Kings" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <img src={CSK} className="card-img-top" alt="Chennai Super Kings" />
            <div className="card-body">
              <h5 className="card-title">Chennai Super Kings</h5>
              <p className="card-text">Five-time IPL champions.</p>
            </div>
          </div>
        </Link>

        {/* MI */}
        <Link to="/watch/Mumbai Indians" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <img src={MI} className="card-img-top" alt="Mumbai Indians" />
            <div className="card-body">
              <h5 className="card-title">Mumbai Indians</h5>
              <p className="card-text">Most successful IPL franchise.</p>
            </div>
          </div>
        </Link>

        {/* RCB */}
        <Link to="/watch/Royal Challengers Bengaluru" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <img src={RCB} className="card-img-top" alt="RCB" />
            <div className="card-body">
              <h5 className="card-title">Royal Challengers Bengaluru</h5>
              <p className="card-text">Famous for passionate fans.</p>
            </div>
          </div>
        </Link>

        {/* KKR */}
        <Link to="/watch/Kolkata Knight Riders" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <img src={KKR} className="card-img-top" alt="KKR" />
            <div className="card-body">
              <h5 className="card-title">Kolkata Knight Riders</h5>
              <p className="card-text">Two-time IPL champions.</p>
            </div>
          </div>
        </Link>

        {/* RR */}
        <Link to="/watch/Rajasthan Royals" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <img src={RR} className="card-img-top" alt="RR" />
            <div className="card-body">
              <h5 className="card-title">Rajasthan Royals</h5>
              <p className="card-text">First IPL champions.</p>
            </div>
          </div>
        </Link>

        {/* SRH */}
        <Link to="/watch/Sunrisers Hyderabad" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <img src={SRH} className="card-img-top" alt="SRH" />
            <div className="card-body">
              <h5 className="card-title">Sunrisers Hyderabad</h5>
              <p className="card-text">Strong bowling attack.</p>
            </div>
          </div>
        </Link>

        {/* DC */}
        <Link to="/watch/Delhi Capitals" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <img src={DC} className="card-img-top" alt="DC" />
            <div className="card-body">
              <h5 className="card-title">Delhi Capitals</h5>
              <p className="card-text">Young and aggressive team.</p>
            </div>
          </div>
        </Link>

        {/* PBKS */}
        <Link to="/watch/Punjab Kings" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <img src={PNJ} className="card-img-top" alt="Punjab Kings" />
            <div className="card-body">
              <h5 className="card-title">Punjab Kings</h5>
              <p className="card-text">Explosive batting lineup.</p>
            </div>
          </div>
        </Link>

        {/* GT */}
        <Link to="/watch/Gujarat Titans" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <img src={GT} className="card-img-top" alt="GT" />
            <div className="card-body">
              <h5 className="card-title">Gujarat Titans</h5>
              <p className="card-text">IPL champions in debut season.</p>
            </div>
          </div>
        </Link>

        {/* LSG */}
        <Link to="/watch/Lucknow Super Giants" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <img src={LSG} className="card-img-top" alt="LSG" />
            <div className="card-body">
              <h5 className="card-title">Lucknow Super Giants</h5>
              <p className="card-text">Consistent playoff contenders.</p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default IPLTeams;
