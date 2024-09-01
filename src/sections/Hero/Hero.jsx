import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Yesika Perez Ravelo"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Yesika Carolina
          <br />
          Perez Ravelo
        </h1>
        <h2>Fronted Developer 38</h2>
        <span>
          <a href="https://github.com/YesikaPerezRavelo" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/yesikaperezravelo/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p>
          I am passionate about creating engaging and user-friendly web
          interfaces, and I am eager to apply my skills and experience as a
          Front-End Developer. With a strong background in React, JavaScript,
          and UI/UX design, I am excited to contribute to innovative projects
          that prioritize both functionality and aesthetics. I am particularly
          drawn to roles where I can continue to grow and refine my front-end
          development skills while delivering high-quality user experiences.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
