import React from "react";
import "../../styles/button.css";

function Button({ 
  className = "", 
  variant = "default", 
  size = "default", 
  children, 
  ...props 
}) {
  const classes = `button button-${variant} button-${size} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
