import { contact } from "../../portfolio";
import "./Contact.css";

interface ContactType {
  email?: string;
  sms?: string;
  CV?: string;
}

const Contact: React.FC = () => {
  const c = contact as ContactType;
  if (!c.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <a href={`mailto:${c.email}`}>
        <span className="btn btn--outline">Email me</span>
      </a>
      <br />
      Call or Text me <br />
      {c.sms && (
        <a href={`tel:${c.sms}`}>
          <span className="btn btn--outline">{c.sms}</span>
        </a>
      )}
      <br />
      <h2>View My CV</h2>
      <p>You can View my CV in PDF format below:</p>
      {c.CV && (
        <a
          href={c.CV}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--outline"
        >
          View CV
        </a>
      )}
    </section>
  );
};

export default Contact;
