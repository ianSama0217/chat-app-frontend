import React, { useState } from "react";
import style from "./index.module.scss";

interface TagProps {
  title: string;
  number?: number; // roleBox 數量
  hasIcon?: boolean;
}

const Tag: React.FC<TagProps> = ({ title, number, hasIcon = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style["tag-component"]}>
      <span className={style["title"]}>
        {hasIcon ? (
          <i
            className={`fa-solid fa-angle-down mr05 ${style["icon"]} ${
              isOpen ? style["rotate"] : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          ></i>
        ) : (
          <div className="mr05"></div>
        )}
        <span className={style["tag-name"]}>{title}</span>
        {number ? <span>{"(" + number + ")"}</span> : <></>}
      </span>
    </div>
  );
};

export default Tag;
