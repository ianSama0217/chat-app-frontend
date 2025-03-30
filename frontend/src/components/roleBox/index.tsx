import React from "react";
import Button from "../button";
import "./index.scss";

interface RoleBoxProps {
  userId?: number; // api request, 之後設定為必填
  img?: React.ReactNode; //目前還不確定是傳base64還是reactnode
  name: string;
  groupSize?: number;
  onClick: () => void; // 點擊img或name顯示user資訊
  type?: "self" | "contact" | "group" | "strange";
  notice?: boolean; // contact, group提示是否有通知
}

const RoleBox: React.FC<RoleBoxProps> = ({
  userId,
  img,
  name,
  groupSize,
  onClick,
  type = "contact",
  notice = false,
}) => {
  return (
    <div className="roleBox-component">
      <div className="user-info">
        <div className="photo mr05">{img}</div>
        {type === "group" ? (
          <span className="name">
            {name}
            {"(" + groupSize + ")"}
          </span>
        ) : (
          <span className="name">{name}</span>
        )}
      </div>

      {type === "self" ? (
        // 自己的右側欄位, 暫時為空
        <div></div>
      ) : type === "strange" ? (
        <div className="btn-bar">
          <Button title={"接受"} onClick={() => {}} size="sm" style="success" />
          <Button title={"拒絕"} onClick={() => {}} size="sm" style="danger" />
        </div>
      ) : (
        notice && <div className="notice"></div>
      )}
    </div>
  );
};

export default RoleBox;
