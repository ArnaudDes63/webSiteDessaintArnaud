import React from "react";
import Profile from "../../assets/IMG_5509.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Dessaint Arnaud.</span> Développeur Web
          </h1>

          <p className="home__description">
            Développeur web passionné avec 2 années d'expériences dans la conception,
            le développement et la mise en œuvre de sites web. J'ai de nombreuses
            compétences en développement front-end et back-end, avec une
            spécialisation dans des technologies telles que React, Node.js et API Rest
            avec Express et TypeScript.

          </p>

          <Link to="/about" className="button">
            Plus sur moi
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
