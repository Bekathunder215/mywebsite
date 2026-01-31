import { skills } from "../../portfolio";
import "./Skills.css";

const Skills: React.FC = () => {
  const skillsList = skills as string[];
  if (!skillsList.length) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skillsList.map((skill) => (
          <li key={skill} className="skills__list-item btn btn--plain">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
