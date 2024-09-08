import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import landing1 from "../../assets/Landing1.png";
import landing2 from "../../assets/Landing2.png";
import javescript from "../../assets/javascript.png";
import javascriptHTML from "../../assets/javascriptHTML.png";
import SQL from "../../assets/SQL.png";
import UXUI from "../../assets/UXUI.png";
import react from "../../assets/react.png";
import backend from "../../assets/backend.png";
import chat from "../../assets/chat.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={backend}
          link="https://github.com/YesikaPerezRavelo/FitnessYes"
          h3="Back-end e-commerce"
          p="Node.js, Express.js and MongoDB"
        />
        <ProjectCard
          src={chat}
          link="https://github.com/YesikaPerezRavelo/LiveChat"
          h3="Live Chat"
          p="Node.js and MongoDB"
        />
        <ProjectCard
          src={react}
          link="https://github.com/YesikaPerezRavelo/ProductYesFitness"
          h3="React e-commerce"
          p="Vite and React"
        />
        <ProjectCard
          src={SQL}
          link="https://github.com/YesikaPerezRavelo/YesFitness"
          h3="SQL"
          p="Database"
        />
        <ProjectCard
          src={javascriptHTML}
          link="https://github.com/YesikaPerezRavelo/FitnessPlanYes"
          h3="E-commerce"
          p="Javascript and HTML"
        />
        <ProjectCard
          src={javescript}
          link="https://github.com/YesikaPerezRavelo/fitnessplan/tree/main"
          h3="Raw Javascript"
          p="Didactic interface"
        />
        <ProjectCard
          src={landing2}
          link="https://github.com/YesikaPerezRavelo/Yesika/tree/main"
          h3="Landing Page"
          p="HTML, CSS, SASS, bootstrap"
        />
        <ProjectCard
          src={landing1}
          link="https://github.com/YesikaPerezRavelo/workouts"
          h3="Sketch Landing Page"
          p="Basic HTML"
        />
        <ProjectCard
          src={UXUI}
          link="https://www.behance.net/gallery/158440963/Eventos-sociales-al-aire-libre"
          h3="UX/UI"
          p="look and feel of an app"
        />
      </div>
    </section>
  );
}

export default Projects;
