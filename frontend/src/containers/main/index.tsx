import React from "react";
import RoleBox from "../../components/roleBox";

const Main: React.FC = () => {
  return (
    <div>
      <div className="sidebar" style={{ width: "25vw", minHeight: "100vh" }}>
        <RoleBox name={"自己!"} type="self" onClick={() => {}} />
        <RoleBox name={"聯絡人!"} onClick={() => {}} />
        <RoleBox name={"聯絡人2!"} onClick={() => {}} notice={true} />
        <RoleBox name={"聯絡人3!"} onClick={() => {}} notice={true} />
        <RoleBox name={"聯絡人4!"} onClick={() => {}} />
        <RoleBox name={"聯絡人5!"} onClick={() => {}} notice={true} />
        <RoleBox name={"聯絡人6!"} onClick={() => {}} />
        <RoleBox
          name={"群組!"}
          type="group"
          groupSize={93}
          onClick={() => {}}
        />
        <RoleBox
          name={"群組2!"}
          type="group"
          groupSize={7}
          onClick={() => {}}
          notice={true}
        />
        <RoleBox name={"陌生人!"} type="strange" onClick={() => {}} />
        <RoleBox name={"陌生人2!"} type="strange" onClick={() => {}} />
        <RoleBox name={"陌生人3!"} type="strange" onClick={() => {}} />
        <RoleBox name={"陌生人4!"} type="strange" onClick={() => {}} />
        <RoleBox name={"陌生人5!"} type="strange" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Main;
