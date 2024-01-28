import { useThemeContext } from "../../context/ThemeContext";
import { useLanguageContext } from "../../context/LanguageContext";

function LanguageTable() {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();
  const languageNames = [texts.language1, texts.language2];
  const levelNames = [texts.lglLvl1, texts.lglLvl2];

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
        {Array.from({ length: languageNames.length }, (_, index) => (
          <tr key={index}>
            <td className={`table-body-data ${contextTheme}`}>
              <div className="job-data">
                <p className={`job-text  ${contextTheme}`}>
                  {languageNames[index]}
                </p>
              </div>
            </td>
            <td className={`table-body-data ${contextTheme}`}>
              <p className={`job-text  ${contextTheme}`}>{levelNames[index]}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LanguageTable;
