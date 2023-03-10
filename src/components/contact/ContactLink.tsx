import { Link } from "react-router-dom";

interface ContactLinkProps {
  path: string;
  styleClass: string;
  text: string;
}

const ContactLink = ({
  path,
  styleClass,
  text,
}: ContactLinkProps): JSX.Element => {
  return (
    <>
      <span className={styleClass}>
        <Link to={{ pathname: path }} target="_blank" className="contact-link">
          <h4>{text}</h4>
        </Link>
      </span>
    </>
  );
};

export default ContactLink;
