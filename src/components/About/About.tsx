import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { about } from "../../portfolio";
import "./About.css";

interface Social {
  github?: string;
  linkedin?: string;
  [key: string]: string | undefined;
}

interface AboutType {
  name?: string;
  role?: string;
  description?: string;
  resume?: string;
  social?: Social;
}

const About: React.FC = () => {
  const { name, role, description, resume, social } = about as AboutType;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">An {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            Resume
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
