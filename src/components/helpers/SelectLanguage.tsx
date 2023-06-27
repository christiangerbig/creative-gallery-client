import { useTranslation } from "react-i18next";

interface SelectLanguageProps {
  styleClass: string;
  closeMenuHandler?: () => void;
}

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
        data-cy="select-language"
        onChange={handleSelectLanguage}
      >
        <option value="">{t("select.language.placeholder")}</option>
        <option value="de">{t("select.language.german")}</option>
        <option value="en" className="navigation-list__select-language__option">
          {t("select.language.english")}
        </option>
      </select>
    </div>
  );
};

export default SelectLanguage;
