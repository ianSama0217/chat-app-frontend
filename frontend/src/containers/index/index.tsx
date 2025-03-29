import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import imgbg from "../../../public/images/index-bg-1.webp";
import "./index.scss";

const Index: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className="w-100 row">
      <img src={imgbg} alt="" className="w-50 img-bg" />

      {/* login form */}
      {!isRegister && (
        <div className="w-50 row center ">
          <div className="form column form-container">
            <span className="title text-center">登入 chat!</span>
            <Input title={"帳號"} onChange={() => {}} value={""} size="lg" />
            <Input
              title={"密碼"}
              type="password"
              onChange={() => {}}
              value={""}
              size="lg"
            />
            <Input title={"驗證碼"} onChange={() => {}} value={""} size="lg" />
            <Button title={"登入"} onClick={() => {}} size="lg" />
            <Button
              title={"註冊"}
              onClick={() => setIsRegister(true)}
              size="lg"
            />
          </div>
        </div>
      )}

      {/* register form */}
      {isRegister && (
        <div className="w-50 row center form-container">
          <div className="form column">
            <span className="title text-center">註冊 chat!</span>
            <Input title={"信箱"} onChange={() => {}} value={""} size="lg" />
            <Input title={"帳號"} onChange={() => {}} value={""} size="lg" />
            <Input
              title={"密碼"}
              type="password"
              onChange={() => {}}
              value={""}
              size="lg"
            />
            <Input
              title={"確認密碼"}
              type="password"
              onChange={() => {}}
              value={""}
              size="lg"
            />
            <Button title={"確認"} onClick={() => {}} size="lg" />
            <Button
              title={"返回登入"}
              onClick={() => setIsRegister(false)}
              size="lg"
              style="secondary"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
