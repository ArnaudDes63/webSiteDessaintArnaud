import React from "react";
import { skills } from "../../data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import '../skills/skill.css';

const Skills = () => {
  return (
    <>
      {skills.map(({ title, category }, index) => {
        // Ajoutez la classe "long-title" si le titre est "Bootstrap - Tailwind" ou "TypeScript - Express"
        const isLongTitle = title === "Bootstrap Tailwind" || title === "TypeScript Express";

        return (
          <div className={`progress__box ${isLongTitle ? "long-title" : ""}`} key={index}>
            <div className="progress__circle">
              <CircularProgressbar
                strokeWidth={3.5}
                text={`${category}`}
                value={category}
              />
            </div>

            <h3 className="skills__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};


export default Skills;