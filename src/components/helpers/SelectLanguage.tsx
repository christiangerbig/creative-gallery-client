import { useTranslation } from "react-i18next";

type SelectLanguageProps = {
  styleClass: string;
  closeMenuHandler?: Function;
};

const SelectLanguage = ({
  styleClass,
  closeMenuHandler,
}: SelectLanguageProps): JSX.Element => {
  const { t, i18n } = useTranslation();

  const handleSelectLanguage = ({ target: { value } }: any): void => {
    i18n.changeLanguage(value);
    if (typeof closeMenuHandler !== "undefined") {
      closeMenuHandler();
    }
  };

  return (
    <div>
      <select
        className={styleClass}
        data-cy="menu-select-language"
        onChange={(event) => {
          handleSelectLanguage(event);
        }}
      >
        <option disabled selected value="">
          {t("select.language.placeholder")}
        </option>
        <option value="de">{t("select.language.german")}</option>
        <option value="en">{t("select.language.english")}</option>
      </select>
    </div>
  );
};

export default SelectLanguage;
