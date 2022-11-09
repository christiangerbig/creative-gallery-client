import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

type ExternalLinkProps = {
  path: string;
  styleClass: string;
  text?: string;
  faClass?: string;
  closeMenuHandler?: MouseEventHandler<HTMLAnchorElement>;
};

const ExternalLink = ({
  path,
  styleClass,
  text,
  faClass,
  closeMenuHandler,
}: ExternalLinkProps): JSX.Element => {
  const linkContent = (
    text: string | undefined,
    faClass: string | undefined
  ): string | JSX.Element => {
    return text ? (
      text
    ) : faClass ? (
      <i className={`fab ${faClass} is-white`} />
    ) : (
      ""
    );
  };

  return (
    <>
      <Link
        to={{ pathname: path }}
        target="_blank"
        rel="noreferrer noopener"
        className={styleClass}
        onClick={closeMenuHandler}
      >
        {linkContent(text, faClass)}
      </Link>
    </>
  );
};

export default ExternalLink;
