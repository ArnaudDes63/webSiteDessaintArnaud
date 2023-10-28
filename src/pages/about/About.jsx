import React from "react";
import Info from "../../components/info";
import Stats from "../../components/Stats";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/CV.pdf";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";
import "./about.css";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          Plus sur <span>Moi</span>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section_subtitle">Info Personnel</h3>
            <ul className="info__list grid">
              <Info />
            </ul>

            <a href={CV} download="" className="button">
              Download CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">

        <div className="resume__container grid">
          
          <div className="resume__data">
        <h3 className="section__subtitle subtitle__center">Stage</h3>

            {resume.map((val) => {
              if (val.category === 'stage') {
              return <ResumeItem key={val.id} {...val} />;
              }   
            })}
          </div>
        </div>
      </section>


      <div className="separator"></div>


      <section className="resume">

        <div className="resume__container grid">
          
          <div className="resume__data">
        <h3 className="section__subtitle subtitle__center">Formation</h3>

            {resume.map((val) => {
              if (val.category === 'education') {
              return <ResumeItem key={val.id} {...val} />;
              }   
            })}
          </div>
          <div className="resume__data">
        <h3 className="section__subtitle subtitle__center">Experience</h3>

            {resume.map((val) => {
              if (val.category === 'experience') {
              return <ResumeItem key={val.id} {...val} />;
              }   
            })}
          </div>
          


        </div>
      </section>
    </main>
  );
};

export default About;
