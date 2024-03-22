import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function AllUsers() {
  const darkMode = useSelector((state=>state.darkModeKey))
  const [users,setUsers] = useState([])
  const navigate = useNavigate()
  const userData = localStorage.getItem('userDetails')
  console.log('data from localstorage',userData)
 
  useEffect( ()=>{
    if(!userData){
      console.log('user is not authenticated')
      navigate(-1)  
    }
    // console.log('user refreshed')
    const fetchUsers = async() =>{
      try{
        const config = {
          headers:{
            Authorization:`Bearer ${JSON.parse(userData).data.token}`
          }
        }
        const response = await axios.get('http://localhost:3004/users' ,config)
        console.log('data from backend',response)
        setUsers(response.data)
      }
      catch(error){
        console.log(error.message)
      }
     
    }
    fetchUsers()
    
  },[navigate,userData])

  
  

      return (
    
     
        <div className="chatArea-container" >
          <div className={"chatArea-header" + (darkMode ? ' dark' : "")}>
            <div className="chat-header-status">
              <p className="chat-icon">
                <ChatBubbleIcon />
              </p>
              <div>
                <p className="chat-name">Online Users</p>
              </div>
            </div>
          </div>
          <div className={"sideBar-search" + (darkMode ? ' dark' : "")}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <input placeholder="Search here" className={darkMode ? ' dark' : ''} />
          </div>
          <div className={"userGroup-list" + (darkMode ? ' bg-dark' : "")}>
          {users.map((user, index) => (
          <div
          className={"sideBar-chat-container" + (darkMode ? " dark" : "")}
          key={index}>
          <p className="chat-icon">{user.userName.charAt(0)}</p>
          <p className="chat-name">{user.userName}</p>
        </div>
           ))}
          </div>
        </div>
     
    
  );
}


export default AllUsers
