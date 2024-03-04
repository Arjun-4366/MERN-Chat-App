import React from "react";
import "./MainStyles.css";
import SideBar from "./SideBar";
import ChatArea from "./ChatArea";
function MainContainer() {
  return (
    <div className="main-container">
      <SideBar />
      <ChatArea />
    </div>
  );
}

export default MainContainer;
