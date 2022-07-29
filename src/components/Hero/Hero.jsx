import HeroImg from './../../assets/hero-img.png'
import './Hero.css'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src={HeroImg} alt="Hero" />
      </div>
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Hero