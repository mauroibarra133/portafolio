import { useThemeContext } from "../../context/ThemeContext";
import { useLanguageContext } from "../../context/LanguageContext";

function LanguageTable() {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();

  const languages = [
    {
      languageName: texts.language1,
      levelName: texts.lglLvl1,
    },
    {
      languageName: texts.language2,
      levelName: texts.lglLvl2,
    },
  ];

  return (
    <table className="small-table">
      <thead className={`table-head ${contextTheme}`}>
        <tr>
          <th className={`table-head-data ${contextTheme}`}>
            {texts.languageHead1}
          </th>
          <th className={`table-head-data ${contextTheme}`}>
            {texts.languageHead2}
          </th>
        </tr>
      </thead>
      <tbody className={`table-body ${contextTheme}`}>
        {languages.map((language, index) => (
          <tr key={index}>
            <td className={`table-body-data ${contextTheme}`}>
              <div className="job-data">
                <p className={`job-text ${contextTheme}`}>
                  {language.languageName}
                </p>
              </div>
            </td>
            <td className={`table-body-data ${contextTheme}`}>
              <p className={`job-text ${contextTheme}`}>{language.levelName}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LanguageTable;
