type HeaderTextProps = {
  text: string[];
  borderColor: string;
};

const HeaderText = ({ text, borderColor }: HeaderTextProps): JSX.Element => {
  return (
    <div
      className={
        borderColor === "green"
          ? "headerText greenBorder"
          : borderColor === "orange"
          ? "headerText orangeBorder"
          : borderColor === "violet"
          ? "headerText violetBorder"
          : borderColor === "blue"
          ? "headerText blueBorder"
          : "headerText"
      }
    >
      <h1 className="textFat"> {text[0]} </h1>
      <h2 className="textBig"> {text[1]} </h2>
    </div>
  );
};

export default HeaderText;
