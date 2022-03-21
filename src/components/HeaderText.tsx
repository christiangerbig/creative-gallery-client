type HeaderTextProps = {
  text: string[];
  borderColorName: string;
};

const HeaderText = ({ text, borderColorName }: HeaderTextProps): JSX.Element => {
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
      <h1 className="textFat"> {text[0]} </h1>
      <h2 className="textBig"> {text[1]} </h2>
    </div>
  );
};

export default HeaderText;
