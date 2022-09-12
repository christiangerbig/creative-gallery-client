type Headlines = {
  headline: string;
  subheadline: string;
};

type HeaderTextProps = {
  headlines: Headlines;
  borderColorName: string;
};

const HeaderText = ({
  headlines,
  borderColorName,
}: HeaderTextProps): JSX.Element => {
  const { headline, subheadline } = headlines;

  const borderColor = (borderColorName: string): string => {
    switch (borderColorName) {
      case "green":
        return "headerText greenBorder";
      case "orange":
        return "headerText orangeBorder";
      case "violet":
        return "headerText violetBorder";
      case "blue":
        return "headerText blueBorder";
      default:
        return "headerText";
    }
  };

  return (
    <div className={borderColor(borderColorName)}>
      <h1 className="textFat"> {headline} </h1>
      <h2 className="textBig"> {subheadline} </h2>
    </div>
  );
};

export default HeaderText;
