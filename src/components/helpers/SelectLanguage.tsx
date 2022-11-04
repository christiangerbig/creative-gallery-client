import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

type SelectLanguageProps = {
  styleClass: string;
};

const SelectLanguage = ({ styleClass }: SelectLanguageProps): JSX.Element => {
  const selectElementRef = useRef<HTMLSelectElement | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = i18n.resolvedLanguage as string;
    (selectElementRef.current as HTMLSelectElement).value = currentLanguage;
  }, []);

  const handleSelectLanguage = ({ target: { value } }: any): void => {
    i18n.changeLanguage(value);
  };

  return (
    <div>
      <select
        ref={selectElementRef}
        className={styleClass}
        onChange={(event) => {
          handleSelectLanguage(event);
        }}
      >
        <option value="de">{t("select.language.german")}</option>
        <option value="en">{t("select.language.english")}</option>
      </select>
    </div>
  );
};

export default SelectLanguage;
