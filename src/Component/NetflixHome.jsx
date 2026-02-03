import React from 'react'
import "../assets/css/NetflixHome.css"


export const NetflixHome = () => {
  return (
   <div className="netflix-hero">
      {/* dark overlay */}
      <div className="overlay"></div>

      {/* center content */}
      <div className="hero-content">
        <h1>Unlimited movies, shows, and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="email-box">
          <input type="email" placeholder="Email address" />
          <button>Get Started &gt;</button>
        </div>
      </div>
    </div>
  )
}