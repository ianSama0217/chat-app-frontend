import React from "react";
import style from "./index.module.scss";
import Headshot from "../headshot";

interface DialogBoxProps {
  headshot?: string; // 之後加入img url
  content: React.ReactNode;
  time?: string;
  isMe?: boolean;
}

const DialogBox: React.FC<DialogBoxProps> = ({
  headshot,
  content,
  time = "15:43",
  isMe = true,
}) => {
  return (
    <div
      className={`${style["dialogBox-component"]} ${
        isMe ? style["mine-layout"] : style["theirs-layout"]
      }`}
    >
      {isMe ? (
        <div className={style["dialog-area"]}>
          <span className={style["time"]}>{time}</span>
          <div className={`${style["content"]} ${style["mine"]} ml05`}>
            <span>{content}</span>
          </div>
        </div>
      ) : (
        <div className={style["dialog-area"]}>
          <Headshot img={headshot} />
          <div className={`${style["content"]} ${style["theirs"]} ml05 mr05`}>
            <span>{content}</span>
          </div>
          <span className={style["time"]}>{time}</span>
        </div>
      )}
    </div>
  );
};

export default DialogBox;
