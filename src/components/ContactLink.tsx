import { Link } from "react-router-dom";

type ContactLinkProps = {
  linkPath: string;
  linkClass: string;
  linkText: string;
};

const ContactLink = ({
  linkPath,
  linkClass,
  linkText,
}: ContactLinkProps): JSX.Element => {
  return (
    <>
      <span className={linkClass}>
        <Link to={{ pathname: linkPath }} target="_blank">
          <h4>{linkText}</h4>
        </Link>
      </span>
    </>
  );
};

export default ContactLink;
