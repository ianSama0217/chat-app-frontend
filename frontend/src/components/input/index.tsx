import React from "react";
import "./index.scss";

interface InputProps {
  title: React.ReactNode;
  type?: "text" | "password" | "email" | "number" | "radio" | "checkbox";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value: string;
  size?: "sm" | "basic" | "lg";
  layout?: "row" | "column";
  checked?: boolean;
}

const Input: React.FC<InputProps> = ({
  title,
  type = "text",
  onChange,
  disabled = false,
  value,
  size = "basic",
  layout = "column",
  checked = false,
}) => {
  return (
    <div className={`input-container`}>
      <label className={`label ${size} ${layout}`}>
        {type === "radio" || type === "checkbox" ? (
          <>
            <input
              type={type}
              onChange={onChange}
              disabled={disabled}
              value={value}
              className={`input ${size}-text ${
                layout === "row" ? "mr05" : "mt05"
              }`}
              checked={checked}
            />
            <label className="label-text">{title}</label>
          </>
        ) : (
          <>
            <label className="label-text">{title}</label>
            <input
              type={type}
              onChange={onChange}
              disabled={disabled}
              value={value}
              className={`input ${size}-text ${
                layout === "row" ? "ml05" : "mt05"
              }`}
            />
          </>
        )}
      </label>
    </div>
  );
};

export default Input;
