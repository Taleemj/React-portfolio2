import { useEffect } from "react";
import styles from "./styles/Home.module.scss";
import { Header, Projects, Skills, Aboutme, Contact } from "./components";
import { AiOutlineHeart } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "animate.css";
import WOW from "wow.js";

function App() {
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Header />
        <Projects />
        <Skills />
        <Aboutme />
        <Contact />
        <footer className={styles.footer}>
          <div className={styles.icons}>
            <a
              href="https://linkedin.com/in/taleem-mankuer-713367235"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/Taleemj"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <h4>
            Made & designed with <AiOutlineHeart /> By <span>Taleem</span>
            {new Date().getFullYear()}
          </h4>
        </footer>
      </div>
    </>
  );
}

export default App;
