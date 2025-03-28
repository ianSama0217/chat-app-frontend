import React from "react";
import "./index.scss";

interface ButtonProps {
  title: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  size?: "sm" | "basic" | "lg";
  style?: "primary" | "secondary" | "success" | "danger" | "warning";
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  disabled = false,
  size = "basic",
  style = "primary",
}) => {
  return (
    <button
      className={`button-component ${style} ${size}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
