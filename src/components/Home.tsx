import React from 'react';
import Avatar from '../Avatar.svg';

const Home = () => {
  return (
    <main>
      <section className="hero">
        <h1 className="hero-title">Hi, I'm Nathan.</h1>
        <figure>
          <img className="hero-img" src={Avatar} alt="My avatar." />
          <figcaption>An aspiring full-stack web developer.</figcaption>
        </figure>
      </section>
    </main>
  );
};

export default Home;
