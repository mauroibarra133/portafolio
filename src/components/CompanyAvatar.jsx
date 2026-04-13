import { useThemeContext } from "../context/ThemeContext.jsx";

function CompanyAvatar({ logo, initials, isActive }) {
  const { contextTheme } = useThemeContext();

  return (
    <div
      className={`company-avatar ${contextTheme} ${isActive ? "active" : ""}`}
    >
      {logo ? (
        <img src={logo} alt={initials} className="company-avatar-logo" />
      ) : (
        <span className="company-avatar-initials">{initials}</span>
      )}
    </div>
  );
}

export default CompanyAvatar;
