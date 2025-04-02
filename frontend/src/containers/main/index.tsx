import React from "react";
import RoleBox from "../../components/roleBox";
import Headshot from "../../components/headshot";
import DialogBox from "../../components/dialogBox";
import Tag from "../../components/tag";
import SendMessageBox from "../../components/sendMessageBox";
import DateTag from "../../components/dateTag";

const Main: React.FC = () => {
  return (
    <div className="row">
      <div className="sidebar" style={{ width: "25vw", minHeight: "100vh" }}>
        <Tag title={"about me"} hasIcon={false} />
        <RoleBox
          img={<Headshot />}
          name={"自己!"}
          type="self"
          onClick={() => {}}
        />
        <Tag title={"好友"} number={6} />
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
        <Tag title={"群組"} number={2} />
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
        <Tag title={"陌生訊息"} number={5} />
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
        style={{ border: "1px solid grey", width: "75vw", height: "100vh" }}
      >
        <DateTag date="2024-4-1" />
        <DialogBox content={"hello!"} />
        <DialogBox content={"hello!"} isMe={false} />
        <DateTag date="2024-4-2" />
        <DialogBox content={"借我錢!"} />
        <DialogBox content={"為啥!"} isMe={false} />
        <DateTag date="2024-5-12" />
        <DialogBox
          content={
            "借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!借我錢!"
          }
        />
        <DialogBox content={"先洗澡"} isMe={false} />
        <DateTag date="2025-4-1" />
        <DialogBox content={"ok"} />
        <DateTag date="2025-4-2" />
        <DialogBox content={"洗好了嗎?!"} />

        <SendMessageBox />
      </div>
    </div>
  );
};

export default Main;
