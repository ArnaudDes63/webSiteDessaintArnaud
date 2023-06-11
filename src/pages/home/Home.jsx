import React from "react";
import Profile from "../../assets/photo_2.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css"

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
            Je suis français, actuellement en reconversion professionnelle dans
            le développement Web. Diplômé Bac+2 Développeur web et web mobile.
            Motiver et passionné.
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
