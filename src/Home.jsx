import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header />
      <section className="hero-section">
        <img src={C:\Users\vivaa\OneDrive\Pictures\background.jpg} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to My Portfolio</h1>
        </div>
      </section>
      <section className="about-section">
        <h2>About Me</h2>
        <p>I am a full stack developer with love for beautiful websites and useful applications</p>
      </section>
      <section className="projects-link">
        <h2>Check out my projects</h2>
        <Link to="/projects">Projects</Link>
      </section>
    </div>
  );
};

export default Home;
