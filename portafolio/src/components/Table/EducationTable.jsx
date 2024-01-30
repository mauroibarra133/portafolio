import { useThemeContext } from "../../context/ThemeContext";
import utnIcon from "../../assets/utn-icon.jpg";
import bonorisIcon from "../../assets/bonoris-icon.jpg";
import { useLanguageContext } from "../../context/LanguageContext";

function JobTable() {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();

  const educations = [
    {
      schoolName: "UTN CORDOBA",
      degreeName: texts.degree1,
      iconCompany: utnIcon,
    },
    {
      schoolName: "PBO. JOSE BONORIS",
      degreeName: texts.degree2,
      iconCompany: bonorisIcon,
    },
  ];

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
        {educations.map((education, index) => (
          <tr key={index}>
            <td className={`table-body-data ${contextTheme}`}>
              <div className="job-data">
                <img
                  src={education.iconCompany}
                  alt={education.schoolName}
                  className="table-job-icon"
                />
                <p className={`job-text job-text--padd ${contextTheme}`}>
                  {education.schoolName}
                </p>
              </div>
            </td>
            <td className={`table-body-data ${contextTheme}`}>
              <p className={`job-text  ${contextTheme}`}>
                {education.degreeName}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JobTable;
