import React from "react";
import "./MainStyles.css";
import { useSelector } from "react-redux";

function UserGroupList() {
  const darkMode = useSelector((state=>state.darkModeKey))
  return (
    
      <div className={"sideBar-chat-container" + (darkMode ? ' dark' : "")}>
        <p className="chat-icon">G</p>
        <p className="chat-name">groups</p>
      </div>
    
  );
}

export default UserGroupList;
