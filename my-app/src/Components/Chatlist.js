import React from 'react'
import "./MainStyles.css";
function Chatlist({props}) {
  return (
    <div className='sideBar-chat-container'>
      <p className='chat-icon'>{props.name[0]}</p>
      <p className='chat-name'>{props.name}</p>
      <p className='chat-lastMessage'>{props.lastMessage}</p>
      <p className='chat-timestamp'>{props.timestamp}</p>

    </div>
  )
}

export default Chatlist
