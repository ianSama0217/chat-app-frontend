import React from "react";
import RoleBox from "../../components/roleBox";
import Headshot from "../../components/headshot";
import DialogBox from "../../components/dialogBox";

const Main: React.FC = () => {
  return (
    <div className="row">
      <div className="sidebar" style={{ width: "25vw", minHeight: "100vh" }}>
        <RoleBox
          img={<Headshot />}
          name={"自己!"}
          type="self"
          onClick={() => {}}
        />
        <RoleBox img={<Headshot />} name={"聯絡人!"} onClick={() => {}} />
        <RoleBox
          img={<Headshot />}
          name={"聯絡人2!"}
          onClick={() => {}}
          notice={true}
        />
        <RoleBox
          img={<Headshot />}
          name={"聯絡人3!"}
          onClick={() => {}}
          notice={true}
        />
        <RoleBox img={<Headshot />} name={"聯絡人4!"} onClick={() => {}} />
        <RoleBox
          img={<Headshot />}
          name={"聯絡人5!"}
          onClick={() => {}}
          notice={true}
        />
        <RoleBox img={<Headshot />} name={"聯絡人6!"} onClick={() => {}} />
        <RoleBox
          img={<Headshot iconType="group" />}
          name={"群組!"}
          type="group"
          groupSize={93}
          onClick={() => {}}
        />
        <RoleBox
          img={<Headshot iconType="group" />}
          name={"群組2!"}
          type="group"
          groupSize={7}
          onClick={() => {}}
          notice={true}
        />
        <RoleBox
          img={<Headshot />}
          name={"陌生人!"}
          type="strange"
          onClick={() => {}}
        />
        <RoleBox
          img={<Headshot />}
          name={"陌生人2!"}
          type="strange"
          onClick={() => {}}
        />
        <RoleBox
          img={<Headshot />}
          name={"陌生人3!"}
          type="strange"
          onClick={() => {}}
        />
        <RoleBox
          img={<Headshot />}
          name={"陌生人4!"}
          type="strange"
          onClick={() => {}}
        />
        <RoleBox
          img={<Headshot />}
          name={"陌生人5!"}
          type="strange"
          onClick={() => {}}
        />
      </div>

      <div
        className="chatroom column"
        style={{ border: "1px solid grey", width: "75vw" }}
      >
        <DialogBox content={"hello!"} />
        <DialogBox content={"hello!"} isMe={false} />
        <DialogBox content={"借我錢!"} />
        <DialogBox content={"為啥!"} isMe={false} />
        <DialogBox
          content={
            "不要!不要!不要!不要!不要!不要!不要!不要!不要!不要!不要!不要!"
          }
          isMe={false}
        />
        <DialogBox
          content={
            "借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!"
          }
        />
      </div>
    </div>
  );
};

export default Main;
