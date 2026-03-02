import React from 'react'
import './hero.css'

function Hero() {
  return (
    <div className="hero">
        <div className="hero-left">
            <h1>Happy Birthdayyy</h1>
            <h3>My faavoritt Hooman 💖 You make my world <span className="bright">brighter</span> every single day</h3>
            <button>Celebrate</button>
        </div>
        <div className="hero-right">
          
            <img src="hero-pic.png" alt="it's his photo!"/>
            
        </div>
    </div>
  )
}

export default Hero