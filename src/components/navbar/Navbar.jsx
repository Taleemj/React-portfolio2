import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.scss";
import logo from "../../assets/tm.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.navcontainer}>
      <div className={styles.logo}>
        <a href="#__next">
          {/* <Image src={logo} alt="TM" width="60px" height="60px" /> */}
          <img src={logo} alt="TM" width="60px" height="60px" srcset="" />
        </a>
      </div>
      <div className={styles.linkcontainer}>
        <ul>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li>
            <a href="#skills">Technologies</a>
          </li>
          <li>
            <a href="#aboutme">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className={styles.socialLinks}>
          <a
            href="https://linkedin.com/in/taleem-mankuer-713367235"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/Taleemj" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://web.facebook.com/taleem22"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </div>
      </div>

      <div
        className={`animate__animated animate__fadeInUp ${styles.linkcontainer2}`}
        style={{ display: menuOpen ? "flex" : "none" }}
      >
        <div className={styles.times} onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </div>
        <div className={styles.logo}>
          <a href="#__next">
            {/* <Image
              src={logo}
              alt="TM"
              onClick={() => setMenuOpen(false)}
              width="60px"
              height="60px"
            /> */}
            <img
              src={logo}
              alt="TM"
              onClick={() => setMenuOpen(false)}
              width="60px"
              height="60px"
              srcset=""
            />
            <h5>Taleem</h5>
            <h6>Web Developer</h6>
          </a>
        </div>
        <ul onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li>
            <a href="#skills">Technologies</a>
          </li>
          <li>
            <a href="#aboutme">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className={styles.socialLinks}>
          <a
            href="https://linkedin.com/in/taleem-mankuer-713367235"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/Taleemj" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://web.facebook.com/taleem22"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </div>
      </div>
      <div className={styles.menu} onClick={() => setMenuOpen(true)}>
        <AiOutlineMenu />
      </div>
    </div>
  );
};

export default Navbar;