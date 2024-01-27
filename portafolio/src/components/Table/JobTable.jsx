import { useThemeContext } from "../../context/ThemeContext";
import hiIcon from "../../assets/hi-icon.jpg";
import { useLanguageContext } from "../../context/LanguageContext";

function JobTable() {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();
  const jobNames = [texts.jobName1, texts.jobName2];
  const companyNames = ["HOSPITAL ITALIANO", "HOSPITAL ITALIANO"];
  const iconCompanies = [hiIcon, hiIcon];

  return (
    <table>
      <thead className={`table-head ${contextTheme}`}>
        <tr>
          <th className={`table-head-data ${contextTheme}`}>{"COMPANY"}</th>
          <th className={`table-head-data ${contextTheme}`}>{"JOB"}</th>
        </tr>
      </thead>
      <tbody className={`table-body ${contextTheme}`}>
        {Array.from({ length: jobNames.length }, (_, index) => (
          <tr key={index}>
            <td className={`table-body-data ${contextTheme}`}>
              <div className="job-data">
                <img
                  src={iconCompanies[index]}
                  alt=""
                  className="table-job-icon"
                />
                <p className={`job-text job-text--padd ${contextTheme}`}>
                  {companyNames[index]}
                </p>
              </div>
            </td>
            <td className={`table-body-data ${contextTheme}`}>
              <p className={`job-text  ${contextTheme}`}>{jobNames[index]}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JobTable;
