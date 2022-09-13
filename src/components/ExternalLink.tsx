import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

type ExternalLinkProps = {
  linkPath: string;
  linkClass: string;
  linkText?: string;
  faClass?: string;
  onClickHandler?: MouseEventHandler<HTMLAnchorElement>;
};

const ExternalLink = ({
  linkPath,
  linkClass,
  linkText,
  faClass,
  onClickHandler,
}: ExternalLinkProps): JSX.Element => {
  return (
    <>
      <Link
        to={{ pathname: linkPath }}
        target="_blank"
        rel="noreferrer noopener"
        className={linkClass}
        onClick={onClickHandler}
      >
        {linkText ? (
          linkText
        ) : faClass ? (
          <i className={`fab ${faClass} is-white`} />
        ) : null}
      </Link>
    </>
  );
};

export default ExternalLink;
