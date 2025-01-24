

import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empowering Personalized Learning for Every Student</h1>
        <p>Discover your unique learning style and unlock your full potential</p>
        <div className="hero-cta">
          <Link to="/assessment" className="btn btn-primary">
            Take a Free Learning Style Assessment
          </Link>
          <Link to="/courses" className="btn btn-secondary">
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;