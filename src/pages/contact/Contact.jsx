import React from "react";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Entrez En <span>Contact</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Ne soyez pas timide</h3>

          <p className="contact__description">
            N’hésitez pas à communiquer avec moi. Je suis toujours prêt à
            discuter de nouvelles opportunités, d’idées ou d’occasions de faire
            partie de vos équipes.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Ecrivez-moi</span>
                <h4 className="info__desc">arnauddevv@outlook.fr</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Appelez-moi</span>
                <h4 className="info__desc">06-74-40-67-06</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100093634201864"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100093634201864"
              className="contact__social-link"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Votre Nom"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Votre Email"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Votre Demande"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Votre Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
            Envoyez le Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
