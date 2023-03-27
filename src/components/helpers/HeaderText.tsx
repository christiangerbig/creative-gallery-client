interface Headlines {
  headline: string;
  subheadline: string;
}

interface HeaderTextProps {
  headlines: Headlines;
  borderColorName: string;
}

const HeaderText = ({
  headlines: { headline, subheadline },
  borderColorName,
}: HeaderTextProps): JSX.Element => {
  const borderColor = (borderColorName: string): string => {
    switch (borderColorName) {
      case "green":
        return "header-text header-text__left-border header-text__left-border--green";
      case "orange":
        return "header-text header-text__left-border header-text__left-border--orange";
      case "violet":
        return "header-text header-text__left-border header-text__left-border--violet";
      case "blue":
        return "header-text header-text__left-border header-text__left-border--blue";
      default:
        return "header-text";
    }
  };

  return (
    <div className={borderColor(borderColorName)}>
      <h1 className="header-text__headline header-text__font-size--large">
        {" "}
        {headline}{" "}
      </h1>
      <h2 className="header-text__subheadline header-text__font-size--small">
        {" "}
        {subheadline}{" "}
      </h2>
    </div>
  );
};

export default HeaderText;
