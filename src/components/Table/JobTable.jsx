import { useThemeContext } from "../../context/ThemeContext";
import hiIcon from "../../assets/hi-icon.jpg";
import mercadolibreIcon from "../../assets/mercadolibre-icon.webp";
import { useLanguageContext } from "../../context/LanguageContext";

function JobTable() {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();

  const jobs = [
    {
      jobName: texts.jobName2,
      companyName: "HOSPITAL ITALIANO",
      iconCompany: hiIcon,
    },
    {
      jobName: texts.jobName1,
      companyName: "HOSPITAL ITALIANO",
      iconCompany: hiIcon,
    },
    {
      jobName: texts.jobName3,
      companyName: "MERCADO LIBRE",
      iconCompany: mercadolibreIcon,
    },
  ];

  return (
    <table>
      <thead className={`table-head ${contextTheme}`}>
        <tr>
          <th className={`table-head-data ${contextTheme}`}>
            {texts.jobHead1}
          </th>
          <th className={`table-head-data ${contextTheme}`}>
            {texts.jobHead2}
          </th>
        </tr>
      </thead>
      <tbody className={`table-body ${contextTheme}`}>
        {jobs.reverse().map((job, index) => (
          <tr key={index}>
            <td className={`table-body-data ${contextTheme}`}>
              <div className="job-data">
                <img
                  src={job.iconCompany}
                  alt={job.companyName}
                  className="table-job-icon"
                />
                <p className={`job-text job-text--padd ${contextTheme}`}>
                  {job.companyName}
                </p>
              </div>
            </td>
            <td className={`table-body-data ${contextTheme}`}>
              <p className={`job-text  ${contextTheme}`}>{job.jobName}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JobTable;
