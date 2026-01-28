import React, { useState } from "react";
import logo from "./assets/chai_culture_1_1.avif";
import premixVideo from "./assets/premix.mp4";

function ComingSoon() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState(""); // track input value

  const handleNotify = () => {
    if (email.trim() === "") {
      alert("Please enter your email!"); // optional feedback
      return;
    }
    if(email.includes("@")){
      setSubmitted(true);
    }
    if(!email.includes("@")){
      alert("Please Enter valid mail")
    }
  
   
  };

  return (
    <main className="page">
      <link
        href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
        rel="stylesheet"
      />

      <div className="content">
        <div className="logo-container">
          <img src={logo} alt="Chai Culture Logo" className="logo" />
        </div>

        <h2 className="tagline">Brew the Royal Tradition</h2>

        <p className="description">
          Inspired by royal Indian kitchens, our premium instant chai premix
          brings timeless warmth and heritage to every sip.
        </p>

        <h2 className="launching-soon">Launching Soon....</h2>

        <div className="signup-container">
          {!submitted ? (
            <div className="signup">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleNotify}>Notify Me</button>
            </div>
          ) : (
            <div className="video-wrapper">
              <video
                src={premixVideo}
                autoPlay
                muted
                loop
                className="premix-video"
              />
              <p className="video-text">The Royal Premix is in the Works...</p>
            </div>
          )}
        </div>
      </div>

      <hr />

      <footer className="footer">
        <div className="socials">
          <a href="#">Instagram</a>
          <a href="#">X</a>
          <a href="#">LinkedIn</a>
        </div>
        <p className="footer-text">© 2026 Chai Culture. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default ComingSoon;
