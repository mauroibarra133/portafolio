import { useThemeContext } from "../../context/ThemeContext";
import utnIcon from "../../assets/utn-icon.jpg";
import bonorisIcon from "../../assets/bonoris-icon.jpg";
import { useLanguageContext } from "../../context/LanguageContext";

function JobTable() {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();
  const schoolNames = ["UTN CORDOBA", "PBO. JOSE BONORIS"];
  const degreeNames = [texts.degree1, texts.degree2];
  const iconCompanies = [utnIcon, bonorisIcon];

  return (
    <table>
      <thead className={`table-head ${contextTheme}`}>
        <tr>
          <th className={`table-head-data ${contextTheme}`}>
            {texts.educationHead1}
          </th>
          <th className={`table-head-data ${contextTheme}`}>
            {texts.educationHead2}
          </th>
        </tr>
      </thead>
      <tbody className={`table-body ${contextTheme}`}>
        {Array.from({ length: schoolNames.length }, (_, index) => (
          <tr key={index}>
            <td className={`table-body-data ${contextTheme}`}>
              <div className="job-data">
                <img
                  src={iconCompanies[index]}
                  alt=""
                  className="table-job-icon"
                />
                <p className={`job-text job-text--padd ${contextTheme}`}>
                  {schoolNames[index]}
                </p>
              </div>
            </td>
            <td className={`table-body-data ${contextTheme}`}>
              <p className={`job-text  ${contextTheme}`}>
                {degreeNames[index]}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JobTable;
