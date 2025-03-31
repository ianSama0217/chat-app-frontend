import React from "react";
import style from "./index.module.scss";

interface HeadshotProps {
  img?: string; // img src
  type?: "" | ""; // 圖片類型 jpg, png, gif
  iconType?: "person" | "group";
  onClick?: () => void;
  size?: "sm" | "basic" | "lg";
}

const Headshot: React.FC<HeadshotProps> = ({
  img = null,
  type,
  iconType = "person",
  onClick,
  size = "sm",
}) => {
  return (
    <div
      className={`${style["headshot-component"]} ${style[size]}`}
      onClick={onClick}
    >
      {img ? (
        <img src={img} alt="headshot" className={style["headshot-img"]} />
      ) : iconType === "person" ? (
        <i className={`fa-solid fa-user ${style["headshot-icon"]}`}></i>
      ) : (
        <i className={`fa-solid fa-users ${style["headshot-icon"]}`}></i>
      )}
    </div>
  );
};

export default Headshot;
