import { Link } from "react-router-dom";

type ContactLinkProps = {
  path: string;
  styleClass: string;
  text: string;
};

const ContactLink = ({
  path,
  styleClass,
  text,
}: ContactLinkProps): JSX.Element => {
  return (
    <>
      <span className={styleClass}>
        <Link to={{ pathname: path }} target="_blank">
          <h4 className="is-text-nowrap">{text}</h4>
        </Link>
      </span>
    </>
  );
};

export default ContactLink;
