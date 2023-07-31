import { useEffect } from "react";
import styles from "./styles/Home.module.scss";
import { Header, Projects, Skills, Aboutme, Contact } from "./components";
import "animate.css";
import WOW from "wow.js";
import Footer from "./components/Footer";

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
        <Footer styles={styles} />
      </div>
    </>
  );
}

export default App;
