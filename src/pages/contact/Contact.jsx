import React,{ useState } from "react";
import emailjs from "emailjs-com";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";

const Contact = () => {
  const [formError, setFormError] = useState(false);
  function sendEmail(e) {
    e.preventDefault();
    // Vérification des champs du formulaire
    const { name, email, subject, message } = e.target.elements;

    if (!name.value || !email.value || !subject.value || !message.value) {
      setFormError(true);
      return;
    }


    emailjs.sendForm(
      "service_jfuzsz4",
      "template_sm5b8tc",
      e.target,
      "MC915YqDk0Vljl57d"
    ).then(res => {
      console.log(res);
      window.location.reload(); // Actualiser la page après l'envoi réussi
    }).catch(err => console.log(err))
  }
  return (
    <section className="contact section">
      <h2 className="section__title">
        Entrons en <span>contact</span>
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
                <h4 className="info__desc">06 74 40 67 06</h4>
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

        <form className="contact__form" onSubmit={sendEmail}>
        {formError && (
            <p className="form__error">
              Veuillez remplir tous les champs.
            </p>
          )}
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Votre Nom"
                name="name"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Votre Email"
                name="email"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Votre Demande"
                name="subject"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Votre Message"
              name="message"
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
