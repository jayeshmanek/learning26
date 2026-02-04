import React, { useState } from 'react'
import "../assets/css/NetflixHome.css"

export const NetflixHome = () => {

  // ✅ state to store email
  const [email, setEmail] = useState("");

  // ✅ button click handler
  const handleSubmit = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    console.log("User Email:", email);
    alert(`Email entered: ${email}`);

    // optional: clear input
    setEmail("");
  };

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
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>
            Get Started &gt;
          </button>
        </div>
      </div>
    </div>
  )
}
