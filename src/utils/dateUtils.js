// Calculate duration between two dates
export const calculateDuration = (startDate, endDate = null) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years === 0 && months === 0) {
    return "Menos de 1 mes";
  }

  const parts = [];
  if (years > 0) {
    parts.push(`${years} año${years > 1 ? 's' : ''}`);
  }
  if (months > 0) {
    parts.push(`${months} mes${months > 1 ? 'es' : ''}`);
  }

  return parts.join(" y ");
};

// Format period as "Mes Año - Presente" or "Mes Año - Mes Año"
export const formatPeriod = (startDate, endDate = null) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  const months = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
  ];

  const startFormatted = `${months[start.getMonth()]} ${start.getFullYear()}`;
  const endFormatted = end ? `${months[end.getMonth()]} ${end.getFullYear()}` : "Presente";

  return `${startFormatted} - ${endFormatted}`;
};
