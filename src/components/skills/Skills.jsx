import React from "react";
import styles from "./Skills.module.scss";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import AnimatedLetters from "../Animated/AnimatedLetters";

const Skills = () => {
  const titlearr = ["T", "e", "c", "h", "n", "o", "l", "o", "g", "i", "e", "s"];
  return (
    <div id="skills" className={styles.skills}>
      <h1 className="wow animate__animated animate__fadeInUp">
        <AnimatedLetters wordArray={titlearr} idx={3} />
      </h1>
      <p className="wow animate__animated animate__fadeInUp">
        I&apos;ve worked with a wide range of
        <span>web & mobile development</span>
        Technologies.From frontend and design to backend.
      </p>
      <div className={styles.skillscontainer}>
        <div
          className={`wow animate__animated animate__fadeInUp ${styles.frontend}`}
        >
          <FaNodeJs />
          <h4>Web Development</h4>
          <p>Experienced with</p>
          <ul>
            <li>React & Next Js</li>
            <li>Html / Css / Scss</li>
            <li>JavaScript / TypeScript</li>
          </ul>
        </div>
        <div
          className={`wow animate__animated animate__fadeInUp ${styles.backend}`}
        >
          <FaReact />
          <h4>Learning</h4>
          <p>Working with</p>
          <ul>
            <li>React Native</li>
            <li>Node / Express Js</li>
            <li>Tailwind Css</li>
          </ul>
        </div>
        <div
          className={`wow animate__animated animate__fadeInUp ${styles.tools}`}
        >
          <DiGit />
          <h4>Tools</h4>
          <p>Worked with</p>
          <ul>
            <li>Netlify</li>
            <li>Git & GitHub</li>
            <li>Sanity.io</li>
            <li>Vs Code</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
