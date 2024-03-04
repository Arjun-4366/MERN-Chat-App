import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import "./MainStyles.css";
import RecieveMessage from "./RecieveMessage";
import SendMessage from "./SendMessage";

function ChatArea() {
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <div className="chat-header-status">
          <p className="chat-icon">P</p>
          <div>
            <p className="chat-name">Person</p>
            <p className="chat-timestamp">Online</p>
          </div>
        </div>
        <div className="chatArea-delete-btn">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>    
      <div className="chatArea-message ">
        <RecieveMessage />
        <SendMessage />
        <RecieveMessage />
        <SendMessage />
        <RecieveMessage />
        <SendMessage />
        <RecieveMessage />
        <SendMessage />
        <RecieveMessage />
        <SendMessage />
      </div>
      <div className="chatArea-text">
        <input
          type="text"
          className="input-message"
          placeholder="Type a message here"
        />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatArea;
