import React, { useEffect, useRef, useState } from "react";
import style from "./index.module.scss";

interface SendMessageBoxProps {}

const SendMessageBox: React.FC<SendMessageBoxProps> = () => {
  const [message, setMessage] = useState("");
  const [useTextarea, setUseTextarea] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const maxSize = 25 * 1024 * 1024; // 2MB

      if (file.size > maxSize) {
        alert("檔案大小不能超過 25MB！");
        event.target.value = "";
        return;
      }

      console.log("選擇的檔案:", file.name);
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    console.log("發送訊息: " + message);
    setMessage("");
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault(); // 避免 textarea 換行
      handleSendMessage();
    }
  };

  // 監聽 message 長度變化
  useEffect(() => {
    if (!message) {
      setUseTextarea(false); // 切換至 input
    }

    if (message) {
      if (message.length < 40) {
        setUseTextarea(false); // 切換至 input
      } else {
        setUseTextarea(true); // 切換至 textarea
      }
    }
  }, [message]);

  // useTextarea 改變時，讓焦點自動跳轉
  useEffect(() => {
    if (useTextarea) {
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
          textareaRef.current.selectionStart = textareaRef.current.value.length;
          textareaRef.current.selectionEnd = textareaRef.current.value.length;
        }
      }, 100); // 確保 textarea 顯示後再設置光標
    } else {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.selectionStart = inputRef.current.value.length;
          inputRef.current.selectionEnd = inputRef.current.value.length;
        }
      }, 100);
    }
  }, [useTextarea]);

  return (
    <div className={style["sendMessageBox-component"]}>
      <div className={style["input-wrapper"]}>
        {useTextarea ? (
          <textarea
            ref={textareaRef}
            className={style["message-textarea"]}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            maxLength={250}
          />
        ) : (
          <input
            ref={inputRef}
            type="text"
            className={style["message-input"]}
            placeholder={"輸入訊息..."}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        )}

        <div
          className={`${style["icon-bar"]} ${
            useTextarea ? style["icon-bar-textarea"] : style["icon-bar-input"]
          }`}
        >
          {/* 表情符號 */}
          {/* <i
            className={`fa-regular fa-face-smile ${style["icon"]}`}
            title={"表情符號"}
          ></i> */}
          {/* 上傳檔案 */}
          <i
            className={`fa-solid fa-arrow-up-from-bracket ${style["icon"]}`}
            title={"上傳檔案"}
            onClick={handleFileClick}
          ></i>
          <input
            ref={fileInputRef}
            type="file"
            className={style["hidden"]}
            onChange={handleFileChange}
          />
        </div>
      </div>

      {/* 發送訊息 */}
      <i
        className={`fa-regular fa-paper-plane ${
          useTextarea ? style["send-icon-textarea"] : style["send-icon"]
        }`}
        title={"發送訊息"}
        onClick={handleSendMessage}
      ></i>
    </div>
  );
};

export default SendMessageBox;
