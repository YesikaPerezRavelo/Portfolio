import styles from "./SkillsStyle.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <hr />
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="SASS" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="Mongo DB" />
        <SkillList src={checkMarkIcon} skill="Express.js" />
        <SkillList src={checkMarkIcon} skill="Figma" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
