import React from 'react'
import confetti from "canvas-confetti";
import partySound from "./assets/party.mp3";
import './hero.css'

function Hero() {

  const celebrate = () => {
          const audio = new Audio(partySound);
          
          audio.volume = 0.8;
          audio.play();

      confetti({
        particleCount :500,
        spread :120,
        startVelocity : 60,
        origin :{y:0.6}
      });
  };

  return (
    <div className="hero">
        <div className="hero-left">
            <h1>Happy Birthdayyy</h1>
            <h3>My faavoritt Hooman 💖 You make my world <span className="bright">brighter</span> every day</h3>
            <button className="btn btn-pink btn-animated" onClick={celebrate}>Celebrate</button>
        </div>
        <div className="hero-right">
          
            <img src="hero-pic.png" alt="it's his photo!"/>
            
        </div>
    </div>
  )
}

export default Hero