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
        return "header-text is-border-green";
      case "orange":
        return "header-text is-border-orange";
      case "violet":
        return "header-text is-border-violet";
      case "blue":
        return "header-text is-border-blue";
      default:
        return "header-text";
    }
  };

  return (
    <div className={borderColor(borderColorName)}>
      <h1 className="is-text-xlarge-size"> {headline} </h1>
      <h2 className="is-text-large-size"> {subheadline} </h2>
    </div>
  );
};

export default HeaderText;
