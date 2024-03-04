import React, { useState } from "react";
import "./MainStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import Chatlist from "./Chatlist";

function SideBar() {
    const [chats,setChats] = useState([
        {
            name:'Person1',
            lastMessage:'Last Message',
            timestamp:'today'
        },
        {
            name:'Person1',
            lastMessage:'Last Message',
            timestamp:'today'
        },
        {
            name:'Person1',
            lastMessage:'Last Message',
            timestamp:'today'
        },
        {
            name:'Person1',
            lastMessage:'Last Message',
            timestamp:'today'
        }
    ])
  return (
    <div className="sideBar">
      <div className="sideBar-header">
        <div>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
        </div>
    
    <div>
    <IconButton>
          <PersonAddAltIcon />
        </IconButton>
        <IconButton>
          <GroupAddIcon />
        </IconButton>
        <IconButton>
          <AddCircleIcon />
        </IconButton>
        <IconButton>
          <NightlightIcon />
        </IconButton>
    </div>
        
      </div>
      <div className="sideBar-search">
        <IconButton>
        <SearchIcon/>
        </IconButton>
        <input placeholder="Search here" />
      </div>
      <div className="sideBar-chat">
        {chats.map((chat,index)=>{
            return(
                <Chatlist props={chat} key={index}/>
            )
        })}
       
      </div>
    </div>
  );
}

export default SideBar;
